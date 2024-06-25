import React, { useState, useEffect } from "react";
import Login from "./Login";
import Chat from "./Chat";

function Main({ socket }) {
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    socket.on("users", (users) => {
      const messagesArr = [];
      for (const { userId, username } of users) {
        const newMessage = { type: "userStatus", userId, username };
        messagesArr.push(newMessage);
      }
      setAllMessages([...allMessages, ...messagesArr]);
      setAllUsers(users);
      console.log("users", users);
      console.log("allMessages", allMessages);
      console.log("messagesArr", messagesArr);
    });

    socket.on("session", ({ userId, username }) => {
      setUser({ userId, username });
    });

    socket.on("user connected", ({ userId, username }) => {
      const newMessage = { type: "userStatus", userId, username };
      setAllMessages([...allMessages, newMessage]);
    });

    socket.on("new message", ({ userId, username, message }) => {
      const newMessage = { type: "message", userId, username, message };
      setAllMessages([...allMessages, newMessage]);
    });
  }, [socket, allMessages]);

  const logNewUser = () => {
    console.log("ABCD");
    setUser(newUser);
    socket.auth = { username: newUser };
    socket.connect();
  };

  const sendMessage = () => {
    console.log("ABCD");
    socket.emit("new message", message);
    const newMessage = {
      type: "message",
      userId: user.userId,
      username: user.username,
      message,
    };
    setAllMessages([...allMessages, newMessage]);
    setMessage("");
  };

  return (
    <div className="content">
      <div className="container mt-3">
        {user.userId ? (
          <Chat
            user={user}
            message={message}
            allMessages={allMessages}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        ) : (
          <Login
            newUser={newUser}
            setNewUser={setNewUser}
            logNewUser={logNewUser}
          />
        )}
      </div>
    </div>
  );
}

export default Main;

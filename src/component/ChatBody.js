import React from "react";
import ScrollableFeed from "react-scrollable-feed";

function ChatBody({ user, message, allMessages }) {
  console.log("messages chat body", message);
  var currentdate = new Date();
  return (
    <div className="position-relative chat-height overflow-auto">
      <ScrollableFeed>
        <div className="d-flex flex-column p-4">
          {allMessages.map((message, index) => {
            return message.type === "userStatus" ? (
              <div key={index} className="text-center">
                <span className="badge bg-info">
                  {message.userId === user.userId
                    ? "You have joined"
                    : `${message.username} has joined`}
                </span>
              </div>
            ) : (
              <div
                key={index}
                className={
                  message.userId === user.userId
                    ? "chat-message-left pb-4"
                    : "chat-message-right pb-4"
                }
              >
                <div>
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar8.png"
                    className="rounded-circle mr-1 mx-3"
                    alt={message.username}
                    title={message.username}
                    width="40"
                    height="40"
                  />
                  <div className="text-muted small mx-4">{message.username}</div>
                  {/* <div className="text-muted small text-nowrap mt-2">12:00 AM</div> */}
                </div>
                {/* <div className="flex-grow-1 ms-3">
                    <div className="bg-light rounded py-2 px-3">
                        {message.message}
                    </div>
                </div> */}
                <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                  <div className="font-weight-bold mb-1x">
                    {message.userId === user.userId ? "You" : message.username}
                  </div>
                  {message.message}
                  <div className="text-muted small text-nowrap mt-2">
                    {`${currentdate.getHours()} : ${currentdate.getMinutes()}`}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollableFeed>
    </div>
  );
}

export default ChatBody;

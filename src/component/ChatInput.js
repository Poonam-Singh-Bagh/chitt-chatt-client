import React from "react";

function ChatInput({ message, setMessage, sendMessage }) {
  return (
    <div className="mt-auto align-item-end border-info py-3 px-4 border-top d-lg-block chat-input">
      <div className="input-group flex-fill">
        <input
          type="text"
          className="form-control"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => {
            e.code === "Enter" && sendMessage()
          }}
        />
        <button className="btn btn-info" type="button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInput;

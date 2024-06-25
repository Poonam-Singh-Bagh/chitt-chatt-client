import React from "react";

function ChatContainer(props) {
  return (
    // <div className="card vh-95 border-2 border-warning p-3 shadow-lg">
    <div className="card border-2 border-info w-100 shadow-lg">
      {/* <div className="card w-100"> */}
      <div className="row vh-95">
        <div className="d-flex flex-column col-12 col-lg-12 col-xl-12 chat-window">
          {props.children}
        </div>
      </div>
    </div>
    // </div>
  );
}

export default ChatContainer;

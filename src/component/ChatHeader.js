import React from "react";

function ChatHeader({ user }) {
  return (
    <div className="align-item-start py-2 px-4 w-100 border-2 border-bottom d-lg-block sticky-top bg-white">
      <div className="d-flex align-items-center py-1">
        <div className="position-relative">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar8.png"
            className="rounded-circle mx-2"
            alt={user.username}
            width="40"
            height="40"
          />
        </div>
        <div className="flex-grow-1">
          <strong>Logger in as {user.username}</strong>
          <div className="text-muted small">
            <em>Typing...</em>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;

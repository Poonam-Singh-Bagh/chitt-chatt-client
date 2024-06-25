// import React from "react";

// function Chat({ user }) {
//   return (
//     <div className="card vh-95 border-2 border-warning p-3 shadow-lg">
//       <div className="card border-2 border-info w-100">
//         {/* <div className="card w-100"> */}
//         <div className="row">
//           <div className="d-flex flex-column col-12 col-lg-12 col-xl-12">
//             <div className="align-item-start py-2 px-4 w-100 border-2 border-bottom d-lg-block sticky-top bg-white">
//               <div className="d-flex align-items-center py-1">
//                 <div className="position-relative">
//                   <img
//                     src="https://bootdey.com/img/Content/avatar/avatar8.png"
//                     className="rounded-circle mx-2"
//                     alt={user}
//                     width="40"
//                     height="40"
//                   />
//                 </div>
//                 <div className="flex-grow-1">
//                   <strong>Logger in as {user}</strong>
//                   <div className="text-muted small">
//                     <em>Typing...</em>
//                   </div>
//                 </div>
//                 <div>
//                   <button className="btn btn-primary btn-lg" type="button">
//                     Send
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chat;

import React from "react";
import ChatContainer from "./ChatContainer";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatBody from "./ChatBody";
// import ScrollableFeed from "react-scrollable-feed";

function Chat({ user, message, allMessages, setMessage, sendMessage }) {
  return (
    <ChatContainer>
      <ChatHeader user={user} />
      <ChatBody user={user} message={message} allMessages={allMessages} />
      <ChatInput
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </ChatContainer>
  );
}

export default Chat;

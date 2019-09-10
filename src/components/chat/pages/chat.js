import React from "react";
import ChatContent from "../chat-content/chat-content";

const Chat = ({ id }) => {
  return (
    <div className="stars">
      <div className="twinkling">
        <ChatContent id={id} />
      </div>
    </div>
  );
};

export default Chat;

import React from "react";
import ConversationsContent from "../conversations-content/conversations-content";
import ListOfPages from "../../ListOfPages/ListOfPages";

const Conversations = () => {
  return (
    <div className="stars">
      <div className="twinkling">
        <ConversationsContent />
        <ListOfPages />
      </div>
    </div>
  );
};

export default Conversations;

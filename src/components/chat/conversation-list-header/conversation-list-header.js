import React from "react";
import { showModal } from "../../../actions";
import { connect } from "react-redux";
import CreateConversationModal from "../create-conversation-modal/create-conversation-modal";
import "./conversation-list-header.css";

const ConversationListHeader = ({ showModal }) => {
  return (
    <div className="p-2 ">
      <h1 className="col-sm-9 d-inline-block h3 mt-3">Conversations</h1>
      <button
        className="col-sm-3 btn btn-dark mb-3 header-button"
        onClick={showModal}
      >
        Create conversation
      </button>
      <CreateConversationModal />
      <hr className="m-0" />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    showModal: () => dispatch(showModal())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ConversationListHeader);

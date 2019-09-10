import React, { Component } from "react";
import withSonetService from "../hoc/with-sonet-service";
import { fetchConversations } from "../../../actions";
import { connect } from "react-redux";
import "./chat-header.css";

class ChatHeader extends Component {
  componentDidMount() {
    const { fetchConversations, userId } = this.props;
    fetchConversations(userId);
  }

  getConversationName = () => {
    const { conversations, id } = this.props;
    let result;
    if (conversations.length > 0) {
      conversations.forEach(conversation => {
        if (conversation.id == id) {
          result = conversation.title;
        }
      });
    } else {
      result = " ";
    }
    return result;
  };

  render() {
    const { sonetService, id } = this.props;
    const title = this.getConversationName();
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center pt-4">
          <h4 className="h4">{title}</h4>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ chat: { conversations, userId } }) => {
  return { conversations, userId };
};

const mapDispatchToProps = (dispatch, { sonetService }) => {
  return {
    fetchConversations: userId =>
      fetchConversations(sonetService, dispatch, userId)()
  };
};

export default withSonetService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChatHeader)
);

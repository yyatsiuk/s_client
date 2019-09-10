import React, { Component } from "react";
import withSonetService from "../hoc/with-sonet-service";
import { connect } from "react-redux";
import { fetchFriends, toggleCheckFriend } from "../../../actions";
import Spinner from "../../common/spinner/Spinner";
import FriendListItem from "../friend-list-item/friend-list-item";
import "./friend-list.css";

class FriendList extends Component {
  componentDidMount() {
    const { fetchFriends, userId } = this.props;
    fetchFriends(userId);
  }

  render() {
    const {
      friends,
      loadingFriends,
      onFriendCheck,
      searchFriendsLabel
    } = this.props;

    if (loadingFriends) {
      return (
        <center>
          <Spinner />
        </center>
      );
    }

    const searchedFriends = friends.filter(friend => {
      const fullName = friend.firstName + " " + friend.lastName;
      return (
        fullName.toLowerCase().indexOf(searchFriendsLabel.toLowerCase()) > -1
      );
    });

    return (
      <ul className="p-2 friends">
        {searchedFriends.map(friend => {
          return (
            <li
              key={friend.id}
              className="friend"
              onClick={() => onFriendCheck(friend)}
            >
              <FriendListItem friend={friend} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({
  chat: { friends, loadingFriends, searchFriendsLabel, userId }
}) => {
  return {
    friends,
    loadingFriends,
    searchFriendsLabel,
    userId
  };
};

const mapDispatchToProps = (dispatch, { sonetService }) => {
  return {
    fetchFriends: userId => fetchFriends(sonetService, dispatch, userId)(),
    onFriendCheck: friend => dispatch(toggleCheckFriend(friend))
  };
};

export default withSonetService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FriendList)
);

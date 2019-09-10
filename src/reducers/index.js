import {
  ADD_USER_REGISTER_DATA,
  ADD_USER_LOGIN_DATA,
  ADD_AUTIFICATED_USER_DATA,
  ADD_USER_REGISTER_ERRORS,
  ADD_USER_LOGIN_ERRORS,
  CHANGE_ALERT_EMAIL_CONFIRMATION,
  ADD_POST_COMMENTS,
  ADD_POST_LIST,
  REINIT_STORE
} from "../constants/actionTypes";
import { initialState } from "../store";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REINIT_STORE:
      return Object.assign({},initialState,{});
    case ADD_USER_REGISTER_DATA:
      return Object.assign({}, state, {
        auth: {
          login: Object.assign({}, state.auth.login, {}),
          register: {
            data: action.payload,
            errors: Object.assign({}, state.auth.register.errors, {})
          }
        }
      });
    case ADD_USER_LOGIN_DATA:
      return Object.assign({}, state, {
        auth: {
          login: {
            data: action.payload,
            errors: Object.assign({}, state.auth.login.errors)
          },
          register: Object.assign({}, state.auth.register, {})
        }
      });
    case ADD_USER_LOGIN_ERRORS:
      return Object.assign({}, state, {
        auth: {
          login: {
            data: Object.assign({}, state.auth.login.data),
            errors: action.payload
          },
          register: Object.assign({}, state.auth.register, {})
        }
      });
    case ADD_AUTIFICATED_USER_DATA:
      return Object.assign({}, state, {
        user: {
          ...action.payload,
          following: state.user.following,
          followers: state.user.followers,
          posts: state.user.posts
        },
        chat:{
          ...state.chat,
          userId: action.payload.id
        }
      });
    case ADD_POST_COMMENTS:
      return Object.assign({}, state, {
        user: {
          ...state.user,
          posts:
            state.user.posts.map(post => {
              if (post.id === action.payload.postId) {
                // const newPost = Object.assign({}, post, {});
                // newPost.comments = action.payload.comments;
                // return newPost;
                post.comments = action.payload.comments;
              }
              return post;
            })

        }
      });
    case ADD_POST_LIST:
      return Object.assign({}, state, {
        user: {
          ...state.user,
          posts: Object.assign({}, state, action.payload)
        }
      });
    case ADD_USER_REGISTER_ERRORS:
      return Object.assign({}, state, {
        auth: {
          login: Object.assign({}, state.auth.login, {}),
          register: {
            data: Object.assign({}, state.auth.register.data, {}),
            errors: action.payload
          }
        }
      });
    case CHANGE_ALERT_EMAIL_CONFIRMATION:
      return Object.assign({}, state, {
        alertEmailConfirmation: action.payload
      });
    case "FETCH_CONVERSATIONS_REQUEST":
      return {
        ...state,
        chat: {
          ...state.chat,
          conversations: [],
          loadingConversations: true
        }
      };
    case "FETCH_CONVERSATIONS_SUCCESS":
      return {
        ...state,
        chat: {
          ...state.chat,
          conversations: action.payload,
          loadingConversations: false
        }
      };
    case "FETCH_MESSAGES_REQUEST":
      return {
        ...state,
        chat: {
          ...state.chat,
          messages: [],
          loadingMessages: true
        }
      };
    case "FETCH_MESSAGES_SUCCESS":
      return {
        ...state,
        chat: {
          ...state.chat,
          messages: action.payload,
          loadingMessages: false
        }
      };
    case "FETCH_FRIENDS_REQUEST":
      return {
        ...state,
        chat: {
          ...state.chat,
          friends: [],
          loadingFriends: true
        }
      };
    case "FETCH_FRIENDS_SUCCESS":
      return {
        ...state,
        chat: {
          ...state.chat,
          friends: action.payload,
          loadingFriends: false
        }
      };
    case "MESSAGE_ADDED":
      return {
        ...state,
        chat: {
          ...state.chat,
          messages: [
            ...state.chat.messages,
            {
              id: action.payload.id,
              content: action.payload.content,
              sender: action.payload.sender,
              sendTime: action.payload.sendTime
            }
          ]
        }
      };
    case "MESSAGE_INPUT_CHANGE":
      return {
        ...state,
        chat: {
          ...state.chat,
          messageLabel: action.payload
        }
      };
    case "CONVERSATION_NAME_INPUT_CHANGE":
      return {
        ...state,
        chat: {
          ...state.chat,
          conversationNameLabel: action.payload
        }
      };
    case "SEARCH_FRIENDS_INPUT_CHANGE":
      return {
        ...state,
        chat: {
          ...state.chat,
          searchFriendsLabel: action.payload
        }
      };

    case "MESSAGE_INPUT_CLEAR":
      return {
        ...state,
        chat: {
          ...state.chat,
          messageLabel: ""
        }
      };
    case "SHOW_MODAL":
      return {
        ...state,
        chat: {
          ...state.chat,
          showModal: true
        }
      };
    case "HIDE_MODAL":
      return {
        ...state,
        chat: {
          ...state.chat,
          showModal: false
        }
      };
    case "TOGGLE_CHECK_FRIEND":
      const changedFriends = state.chat.friends.map(friend =>
        friend.id === action.payload.id
          ? { ...friend, checked: !friend.checked }
          : friend
      );
      return {
        ...state,
        chat: {
          ...state.chat,
          friends: changedFriends
        }
      };
    default:
      return state;
  }
};

export default rootReducer;

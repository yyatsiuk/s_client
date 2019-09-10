import {createStore, applyMiddleware} from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {composeWithDevTools} from "redux-devtools-extension";
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import rootReducer from "../reducers";



export const initialState = {
    auth: {
        alertEmailConfirmation: false,
        register: {
            data: {
                email: "",
                password: "",
                confirmPassword: "",
                nickname: "",
                agreement: false
            },
            errors: {
                email: null,
                nickname: null,
                password: null,
                confirmPassword: null,
                agreement: null
            }
        },
        login: {
            data: {
                email: "",
                password: ""
            },
            errors: {
                email: null,
                password: null
            }
        }
    },
    user: {
        id: null,
        firstName: "",
        lastName: "",
        email: "",
        nickname: "",
        city: "",
        country: "",
        planet: "",
        token: null,

        followers: [
            {
                img: "https://www.certmetrics.com/api/ob/image/amazon/c/1",
                name: "Follower Folowerenko"
            },
            {
                img: "https://www.certmetrics.com/api/ob/image/amazon/c/2",
                name: "User Userenko"
            },
            {
                img: "https://www.certmetrics.com/api/ob/image/amazon/c/3",
                name: "Friend Friendenko"
            }
        ],
        following: [
            {
                img: "https://www.certmetrics.com/api/ob/image/amazon/c/1",
                name: "SOme guy!!"
            },
            {
                img: "https://www.certmetrics.com/api/ob/image/amazon/c/2",
                name: "Hell Yeah!!"
            },
            {
                img: "https://www.certmetrics.com/api/ob/image/amazon/c/3",
                name: "That's me"
            }
        ],
        posts: [
            {
                id: 1,
                comments: [],
                nickname: "User Userenko",
                photo_profile: "https://timedotcom.files.wordpress.com/2015/02/jeremy-meeks.jpeg",
                title: "ServiceRocket1",
                text:
                    "Project engineer with interest on design and develop of software components responsible for managing the logic and systems integration, that allow communicate web and mobile applications with the data sources of a business. With experiences developing REST/SOAP web services in Java and design and modeling of data for SQL and No-SQL databases."
            },
            {
                id: 2,
                comments: [],
                nickname: "User Userenko",
                photo_profile: "https://timedotcom.files.wordpress.com/2015/02/jeremy-meeks.jpeg",
                title: "ServiceRocket2",
                text:
                    "Project engineer with interest on design and develop of software components responsible for managing the logic and systems integration, that allow communicate web and mobile applications with the data sources of a business. With experiences developing REST/SOAP web services in Java and design and modeling of data for SQL and No-SQL databases."
            },
            {
                id: 3,
                comments: [],
                nickname: "User Userenko",
                photo_profile: "https://timedotcom.files.wordpress.com/2015/02/jeremy-meeks.jpeg",
                title: "ServiceRocket3",
                text:
                    "Project engineer with interest on design and develop of software components responsible for managing the logic and systems integration, that allow communicate web and mobile applications with the data sources of a business. With experiences developing REST/SOAP web services in Java and design and modeling of data for SQL and No-SQL databases."
            },
            {
                id: 4,
                comments: [],
                nickname: "User Userenko",
                photo_profile: "https://timedotcom.files.wordpress.com/2015/02/jeremy-meeks.jpeg",
                title: "ServiceRocket4",
                text:
                    "Project engineer with interest on design and develop of software components responsible for managing the logic and systems integration, that allow communicate web and mobile applications with the data sources of a business. With experiences developing REST/SOAP web services in Java and design and modeling of data for SQL and No-SQL databases."
            },
            {
                id: 5,
                comments: [],
                nickname: "User Userenko",
                photo_profile: "https://timedotcom.files.wordpress.com/2015/02/jeremy-meeks.jpeg",
                title: "ServiceRocket4",
                text:
                    "Project engineer with interest on design and develop of software components responsible for managing the logic and systems integration, that allow communicate web and mobile applications with the data sources of a business. With experiences developing REST/SOAP web services in Java and design and modeling of data for SQL and No-SQL databases."
            },
            {
                id: 6,
                comments: [],
                nickname: "User Userenko",
                photo_profile: "https://timedotcom.files.wordpress.com/2015/02/jeremy-meeks.jpeg",
                title: "ServiceRocket4",
                text:
                    "Project engineer with interest on design and develop of software components responsible for managing the logic and systems integration, that allow communicate web and mobile applications with the data sources of a business. With experiences developing REST/SOAP web services in Java and design and modeling of data for SQL and No-SQL databases."
            }
        ]
    },

    groups: [
        {
            name: "name1",
            id: 1,
            img: "https://www.certmetrics.com/api/ob/image/amazon/c/4",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae ea obcaecati quos recusandae repudiandae?"
        },
        {
            name: "name2",
            id: 2,
            img: "https://www.certmetrics.com/api/ob/image/amazon/c/4",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae ea obcaecati quos recusandae repudiandae?"
        },
        {
            name: "name3",
            id: 3,
            img: "https://www.certmetrics.com/api/ob/image/amazon/c/4",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae ea obcaecati quos recusandae repudiandae?"
        },
        {
            name: "name4",
            id: 4,
            img: "https://www.certmetrics.com/api/ob/image/amazon/c/4",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae ea obcaecati quos recusandae repudiandae?"
        },
        {
            name: "name5",
            id: 5,
            img: "https://www.certmetrics.com/api/ob/image/amazon/c/4",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae ea obcaecati quos recusandae repudiandae?"
        },
        {
            name: "name6",
            id: 6,
            img: "https://www.certmetrics.com/api/ob/image/amazon/c/4",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae ea obcaecati quos recusandae repudiandae?"
        }
    ],

    chat: {
        userId: 4,
        conversations: [],
        messages: [],
        friends: [],
        loadingConversations: true,
        loadingMessages: true,
        loadingFriends: true,
        messageLabel: "",
        conversationNameLabel: "",
        searchFriendsLabel: "",
        showModal: false
    }
};

const middleware = [thunk];

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    pReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

//export default store;

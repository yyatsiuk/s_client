import axios from "axios";
import {store} from "../store";

const getAutorizationTiken = () => {
  const state = store.getState();
  const authToken = state.user.token;

  const Authorization = authToken ? `Bearer_${authToken}` : null;
  return Authorization;
};

var baseUrl;
if (process.env.NODE_ENV === "production") {
  baseUrl = "https://api.sonet-social.net/api/";
} else {
  baseUrl = process.env.REACT_APP_LOCAL_API_URL;
}

const API =  axios.create({
  baseURL: baseUrl ,
  contentType: "application/json",
  headers: {
    Authorization: getAutorizationTiken()
  }
});
//been scopes
window.API = API;

export default API;

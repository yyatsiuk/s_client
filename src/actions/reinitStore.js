import {initialState} from "../store";
import {REINIT_STORE} from "../constants/actionTypes";

const reinitStore = () => {
  return {
      type: REINIT_STORE,
      payload: initialState
  };
};

export default reinitStore;
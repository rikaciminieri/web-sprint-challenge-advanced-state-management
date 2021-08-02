import axios from "axios";

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const FETCHING_LOADING = "FETCHING_LOADING";
export const FETCHING_SUCCESSFUL = "FETCHING_SUCCESSFUL";
export const FETCHING_FAILED = "FETCHING_FAILED";
export const ADDING_SMURF = "ADDING_SMURF";
export const ADDS_ERROR_MSG = "ADDS_ERROR_MSG";

export const fetchSmurf = () => {
  return (dispatch) => {
    dispatch(fetchingLoading());
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        dispatch(fetchingSuccessful(res.data));
      })
      .catch((err) => {
        dispatch(fetchingFailed(err.error));
      });
  };
};

export const fetchingLoading = () => {
  return { type: FETCHING_LOADING };
};

export const fetchingSuccessful = (smurfs) => {
  return { type: FETCHING_SUCCESSFUL, payload: smurfs };
};

export const fetchingFailed = (error) => {
  return { type: FETCHING_FAILED, payload: error };
};

export const addingSmurf = (name, nickname, position, summary) => {
  return { type: ADDING_SMURF, payload: {name, nickname, position, summary} };
};

export const addsErrorMsg = (error) => {
  return { type: ADDS_ERROR_MSG, payload: error };
};

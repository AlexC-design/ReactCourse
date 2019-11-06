import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/users");

  dispatch({
    type: "FETCH_POSTS",
    payload: response
  });
};

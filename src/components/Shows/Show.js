import Shows from "./Shows";
import React, { useReducer, useEffect } from "react";

const SHOW_API_URL =
  "https://api.themoviedb.org/3/tv/top_rated?page=1&language=en-US&api_key=482d929cb4907d666170f441baa7bd20";
const initialState = {
  loading: true,
  shows: [],
  errorMessage: null
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SHOWS_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "FETCH_SHOWS_SUCCESS":
      return {
        ...state,
        loading: false,
        shows: action.payload
      };
    case "FETCH_SHOWS_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const Show = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch(SHOW_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: "FETCH_SHOWS_SUCCESS",
          payload: jsonResponse.results
        });
      });
  }, []);

  const { shows, errorMessage, loading } = state;

  return (
    <div className="shows">
      {loading && !errorMessage ? (
        <span>loading... </span>
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        shows
          .slice(0, 10)
          .map((show, index) => (
            <Shows key={`${index}-${show.name}`} show={show} />
          ))
      )}
    </div>
  );
};
export default Show;

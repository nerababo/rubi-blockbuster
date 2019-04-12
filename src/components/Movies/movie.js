import React, { useReducer, useEffect } from "react";
import Movies from "./movies";
import Search from "../Search/Search";
const MOVIE_API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=482d929cb4907d666170f441baa7bd20";
const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "FETCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "FETCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const Movie = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: "FETCH_MOVIES_SUCCESS",
          payload: jsonResponse.results
        });
      });
  }, []);

  const search = searchValue => {
    dispatch({
      type: "FETCH_MOVIES_REQUEST"
    });
    fetch(
      `https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query=${searchValue}&language=en-US&api_key=482d929cb4907d666170f441baa7bd20`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "FETCH_MOVIES_SUCCESS",
            payload: jsonResponse.results
          });
        } else {
          dispatch({
            type: "FETCH_MOVIES_FAILURE",
            error: jsonResponse.Error
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;

  return (
    <div>
      <Search search={search} />
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movies key={`${index}-${movie.title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};
export default Movie;

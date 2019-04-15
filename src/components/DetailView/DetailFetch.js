import React, { useReducer, useEffect } from "react";
import DetailView from "./DetailView";

const API_MEDIA_TYPE = match.params.media_type;
const API_MEDIA_ID = match.params.id;
const API_KEY = "482d929cb4907d666170f441baa7bd20";
const API_URL = "https://api.themoviedb.org/3/";

const initialState = {
  loading: true,
  multiSearch: [],
  errorMessage: null
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DETAIL_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "FETCH_DETAIL_SUCCESS":
      return {
        ...state,
        loading: false,
        multiSearch: action.payload
      };
    case "FETCH_DETAIL_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const DetailFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(
      `${API_URL}/${API_MEDIA_TYPE}/${API_MEDIA_ID}/${API_KEY}&append_to_response=videos`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: "FETCH_DETAIL_SUCCESS",
          payload: jsonResponse.results
        });
      });
  }, []);

  const { multiSearch, errorMessage, loading } = state;

  return (
    <div>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          multiSearch.map((multi, index) => (
            <DetailView key={`${index}-${multi.title}`} detail={multi} />
          ))
        )}
      </div>
    </div>
  );
};
export default DetailFetch;

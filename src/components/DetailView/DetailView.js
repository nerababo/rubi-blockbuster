import React, { useReducer, useEffect } from "react";
import Result from "./DetailFetch";
import { withRouter } from "react-router-dom";

const { match } = match.params.id;

console.log(match);
// const ApiId = Number(id, 10);
// console.log(ApiId);
// const arrPara = { id: "sample" };
// arrPara[paraemetri];

//   console.log("match", match);

// };

const API_KEY = "482d929cb4907d666170f441baa7bd20";
const API_URL = "https://api.themoviedb.org/3/search/multi?";
const FETCH_API_URL = `${API_URL}api_key=${API_KEY}&language=en-US&query=${id}&page=1&include_adult=false&region=en-US`;

const initialState = {
  loading: true,
  details: [],
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
        details: action.payload
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

const Details = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(FETCH_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse);
        dispatch({
          type: "FETCH_DETAIL_SUCCESS",
          payload: jsonResponse.results
        });
      });
  }, []);

  const { details, errorMessage, loading } = state;

  return (
    <div>
      <div className="details">
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          details.map((detail, index) => (
            <Result key={`${index}-${detail.title}`} detail={detail} />
          ))
        )}
      </div>
    </div>
  );
};

export default withRouter(Details);

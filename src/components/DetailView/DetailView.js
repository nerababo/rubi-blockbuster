import React from "react";
import Card from "react-bootstrap/Card";
import "../cards.css";
import Suggestions from "../SearchDva/Suggestions";
// import { useReducer, useEffect } from "react";

const DetailView = () => {
  return <h1>{this.props.params.id}</h1>;
};

//   <Card key={this.props.params.id} style={{ width: "18rem" }}>
//     <Card.Img
//       variant="top"
//       src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
//       alt={`Movie: ${original_name}`}
//     />
//     <Card.Body>
//       <Card.Title>{original_name}</Card.Title>
//     </Card.Body>
//   </Card>

//   return (
//     <div>
//       <div className="details">
//         {loading && !errorMessage ? (
//           <span>loading... </span>
//         ) : errorMessage ? (
//           <div className="errorMessage">{errorMessage}</div>
//         ) : (
//           videos.map(video => (
//             <Card style={{ width: "25rem" }}>
//               <Card.Img
//                 variant="top"
//                 src={`https://www.youtube.com/watch?v=${
//                   video.results.video.key
//                 }`}
//                 alt={`Title: ${video.name}`}
//               />
//               <Card.Body>
//                 <Card.Title>{video.name}</Card.Title>
//                 <Card.Text>{video.overview}</Card.Text>
//               </Card.Body>
//             </Card>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };
export default DetailView;

import React from "react";
import logo from "../../logo.svg";
import Card from "react-bootstrap/Card";
import { withRouter } from "react-router-dom";
const PLACEHOLDER_IMG = logo;

const Result = ({ detail }) => {
  const poster =
    detail.poster_path === "N/A"
      ? PLACEHOLDER_IMG
      : `https://image.tmdb.org/t/p/w300${detail.poster_path}`;

  return (
    <div>
      <Card style={{ width: "18rem" }} key={`{detail.id}-${detail.title}`}>
        <Card.Img variant="top" src={poster} alt={`Title: ${detail.title}`} />
        <Card.Body>
          <Card.Title>{detail.title}</Card.Title>
          <Card.Text>{detail.overview}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

// const Suggestions = props => {
//   const options = props.results.map(r => (
//     <Link to={`/DetailView/${r.id}`}>
//       <Card style={{ width: "18rem" }}>
//         <Card.Img
//           variant="top"
//           src={`https://image.tmdb.org/t/p/w300/${r.poster_path}`}
//           alt={`Movie: ${r.original_name}`}
//         />
//         <Card.Body>
//           <Card.Title>{r.original_name}</Card.Title>
//         </Card.Body>
//       </Card>
//     </Link>
//   ));

//   return (
//     <div>
//       <ul>{options}</ul>
//     </div>
//   );
// };

export default withRouter(Result);

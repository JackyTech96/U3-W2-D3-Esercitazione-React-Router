import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleFIlm = (props) => (
  <Col className="mb-3 mb-xl-0">
    <Link to={`/movie-details/${props.movieId}`}>
      <img className="w-100 h-100 pointer-cursor " src={props.Url} alt={props.Title}></img>
    </Link>
  </Col>
);
export default SingleFIlm;

import { Container } from "react-bootstrap";
import NetflixActionBar from "./NetflixActionBar";
import NetflixRow from "./NetflixRow";
import NetflixFooter from "./NetflixFooter";

const NetflixContainer = () => (
  <Container fluid className="px-4" style={{ backgroundColor: "#221f1f" }}>
    <NetflixActionBar />
    <NetflixRow categoryTitle="Trending Now" movieTitle="Transformers" />
    <NetflixRow categoryTitle="Watch it Again" movieTitle="Batman" />
    <NetflixRow categoryTitle="New Releases" movieTitle="Jurassic Park" />
    <NetflixFooter />
  </Container>
);

export default NetflixContainer;

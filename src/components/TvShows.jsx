import { Container } from "react-bootstrap";
import NetflixRow from "./NetflixRow";

const TvShows = () => {
  return (
    <div className="h-100" style={{ backgroundColor: "#221f1f" }}>
      <Container fluid className="px-4">
        <h2 className="text-white">TV Shows</h2>
        <NetflixRow movieTitle="Hulk" />
        <NetflixRow movieTitle="superman" />
        <NetflixRow movieTitle="fast" />
      </Container>
    </div>
  );
};
export default TvShows;

import { Dropdown } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

const NeflixActionBar = () => (
  <div className="d-flex justify-content-between">
    <div className="d-flex">
      <h2 className="mb-4 text-white">TV Shows</h2>
      <Dropdown className="ms-4 mt-1">
        <Dropdown.Toggle variant="dark" id="dropdown-basic" size="sm" className="custom-dropdown-toggle rounded-0">
          Genres{" "}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
          <Dropdown.Item href="#/action-2"> Drama</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div>
      <Grid color="white" className="mx-3 fs-5" />
      <Grid3x3 color="white" className="mx-3 fs-5" />
    </div>
  </div>
);

export default NeflixActionBar;

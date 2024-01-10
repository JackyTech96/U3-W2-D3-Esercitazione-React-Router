import { useEffect, useState } from "react";
import { Alert, Row, Spinner } from "react-bootstrap";
import SingleFilm from "./SingleFilm";

const NetflixRow = ({ movieTitle, categoryTitle }) => {
  // state = {
  //   films: [],
  //   loading: true,
  //   error: null,
  // };

  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // componentDidMount() {
  //   this.fetchFilms();
  // }
  // componentDidUpdate(prevProps) {
  //   // Verifico se le props sono cambiate
  //   if (this.props.movieTitle !== prevProps.movieTitle) {
  //     // Se sono cambiate, esegue una nuova fetch
  //     this.fetchFilms();
  //   }
  // }

  // fetchFilms = async () => {
  //   try {
  //     const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=b84f7858&s=${this.props.movieTitle}`);

  //     if (response.ok) {
  //       const data = await response.json();
  //       const films = data.Search || [];
  //       this.setState({ films, loading: false, error: null });
  //     } else {
  //       console.error("Errore nel fetch dei film");
  //     }
  //   } catch (error) {
  //     this.setState({ error: "Si è verificato un errore durante il recupero dei film.", loading: false });
  //     console.error("Errore nel fetch dei film", error);
  //   }
  // };
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=b84f7858&s=${movieTitle}`);

        if (response.ok) {
          const data = await response.json();
          const films = data.Search || [];
          setFilms(films);
          setLoading(false);
          setError(null);
        } else {
          console.error("Errore nel fetch dei film");
        }
      } catch (error) {
        setError("Si è verificato un errore durante il recupero dei film.");
        setLoading(false);
        console.error("Errore nel fetch dei film", error);
      }
    };

    fetchFilms();
  }, [movieTitle]);

  return (
    <>
      <h4 className="text-white">{categoryTitle}</h4>
      {loading && (
        <Spinner animation="border" role="status" variant="light">
          <span>Loading...</span>
        </Spinner>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {" "}
        {films.slice(0, 6).map((film, index) => (
          <SingleFilm key={index} Url={film.Poster} alt={film.Title} movieId={film.imdbID} />
        ))}
      </Row>
    </>
  );
};

export default NetflixRow;

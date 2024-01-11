import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  console.log(params);
  const [movieDetails, setMovieDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch dettagli del film da omdbAPI
        const fetchFilms = await fetch(`http://www.omdbapi.com/?apikey=b84f7858&i=${params.movieId}`);
        if (!fetchFilms.ok) {
          throw new Error("Errore nel fetch dei dettagli del film da omdbAPI");
        }
        const movieDetailsData = await fetchFilms.json();
        console.log(movieDetailsData);

        setMovieDetails(movieDetailsData);

        // Fetch commenti da API interna
        const fetchComments = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${params.movieId}`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDQ2MDBkOGEyMDAwMThhNDhhNTkiLCJpYXQiOjE3MDQ4OTcyOTAsImV4cCI6MTcwNjEwNjg5MH0.gKdA7EQ49nl_Yl12milacE3yQmFfnG09kMMCsKlRmf0",
          },
        });
        if (!fetchComments.ok) {
          throw new Error("Errore nel fetch dei commenti da API interna");
        }
        const commentsData = await fetchComments.json();
        console.log(commentsData);
        setComments(commentsData);

        setLoading(false);
        setError(null);
      } catch (error) {
        setError("Si è verificato un errore durante il recupero dei dettagli del film e dei commenti.");
        setLoading(false);
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [params.movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={4}>
          <Card bg="dark" text="white" className="my-5">
            <Card.Img
              variant="top"
              src={movieDetails.Poster}
              alt={movieDetails.Title}
              className="img-fluid rounded-top object-fit-contain"
            />
            <Card.Body>
              <Card.Title>{movieDetails.Title}</Card.Title>
              <Card.Text>
                <strong>Year:</strong> {movieDetails.Year}
              </Card.Text>
              <Card.Text>
                <strong>Plot:</strong> {movieDetails.Plot}
              </Card.Text>

              <Card.Text>
                <strong>Comments:</strong>
              </Card.Text>
              <ul>
                {comments.map((comment) => (
                  <li key={comment._id}>
                    <strong>Rating: {comment.rate}</strong>
                    <p>{comment.comment}</p>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;

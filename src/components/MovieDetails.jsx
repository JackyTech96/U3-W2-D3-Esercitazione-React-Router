import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch dettagli del film da omdbAPI
        const omdbResponse = await fetch(`http://www.omdbapi.com/?apikey=b84f7858&i=${params.movieId}`);
        if (!omdbResponse.ok) {
          throw new Error("Errore nel fetch dei dettagli del film da omdbAPI");
        }
        const movieDetailsData = await omdbResponse.json();
        setMovieDetails(movieDetailsData);

        // Fetch commenti da API interna
        const internalApiResponse = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${params.movieId}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDQ2MDBkOGEyMDAwMThhNDhhNTkiLCJpYXQiOjE3MDQ4OTcyOTAsImV4cCI6MTcwNjEwNjg5MH0.gKdA7EQ49nl_Yl12milacE3yQmFfnG09kMMCsKlRmf0",
            },
          }
        );
        if (!internalApiResponse.ok) {
          throw new Error("Errore nel fetch dei commenti da API interna");
        }
        const commentsData = await internalApiResponse.json();
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
    <div className="text-white" style={{ backgroundColor: "#221f1f" }}>
      <h2>Movie Details</h2>
      <h3>Title: {movieDetails.Title}</h3>
      <img src={movieDetails.Poster} alt={movieDetails.Title} />
      <p>Year: {movieDetails.Year}</p>
      <p>Plot: {movieDetails.Plot}</p>

      <h3>Comments:</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>Rating:{comment.rate}</strong>
            <p>{comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;

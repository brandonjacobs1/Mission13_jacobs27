import { useState } from 'react';
import data from './MovieData.json';
import './Movies.css';

function Movies() {
  const [movies, setMovies] = useState(data.MovieData);

  // const AddMovie = function () {
  //   setMovies([
  //     ...data.MovieData,
  //     {
  //       Category: 'Action/Adventure',
  //       Title: 'Batman',
  //       Year: 1989,
  //       Director: 'Tim Burton',
  //       Rating: 'PG-13',
  //     },
  //   ]);
  // };
  return (
    <>
      <div className="movies-bg">
        <div className="Movie-header">
          <br></br>
          <h1>The Greatest Movie Collection</h1>
          <br></br>
        </div>
        <div>
          <table className="table table-striped table-dark table-bordered table-sm">
            <thead className="font-weight-bold">
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody className="">
              {movies.map((movie) => (
                <tr>
                  <td>{movie.Title}</td>
                  <td>{movie.Year}</td>
                  <td>{movie.Director}</td>
                  <td>{movie.Rating}</td>
                  <td>{movie.Category}</td>
                  <td>{movie.Edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <button
          onClick={AddMovie}
          className="btn btn-outline-light btn-sm btn-block "
        >
          Add Movie
        </button> */}
      </div>
    </>
  );
}

export default Movies;

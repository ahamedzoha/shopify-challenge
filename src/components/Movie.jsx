import React from "react";
import { connect } from "react-redux";
import "./styles/Movie.scss";

import { addNominee, removeNominee } from "../redux/actions/nominationActions";

const Movie = ({ movie, addNominee, nominees, removeNominee }) => {
  const isNominated = () => {
    let find = nominees.find((n) => n.imdbID === movie.imdbID);
    if (find === undefined) return false;
    else return true;
  };

  return (
    <div className="movie">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/150x225?text=Image+Unavailable"
        }
        alt={movie.Title}
      />
      <span>{movie.Title}</span>

      {isNominated() ? (
        <button
          className="btn remove"
          onClick={() => {
            removeNominee(movie);
          }}
        >
          Remove
        </button>
      ) : (
        <button
          className="btn nominate"
          disabled={nominees.length >= 5}
          onClick={() => {
            addNominee(movie);
          }}
        >
          Nominate
        </button>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNominee: (nominee) => dispatch(addNominee(nominee)),
  removeNominee: (nominee) => dispatch(removeNominee(nominee)),
});

const mapStateToProps = (state) => ({
  nominees: state.nominations.nominees,
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

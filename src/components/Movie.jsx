import React from "react";
import { connect } from "react-redux";
import "./styles/Movie.scss";

import { addNominee, removeNominee } from "../redux/actions/nominationActions";
import { useNotification } from "./NotificationProvider";

const Movie = ({ movie, addNominee, nominees, removeNominee }) => {
  const isNominated = () => {
    let find = nominees.find((n) => n.imdbID === movie.imdbID);
    if (find === undefined) return false;
    else return true;
  };

  const dispatchNotification = useNotification();

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
            dispatchNotification({
              type: "ERROR",
              message: "Removed nomination",
            });
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
            dispatchNotification({
              type: "SUCCESS",
              message: `Added Nomination: ${nominees.length + 1} out of 5`,
            });
          }}
        >
          {nominees.length >= 5 ? `All 5 Nominated` : `Nominate`}
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

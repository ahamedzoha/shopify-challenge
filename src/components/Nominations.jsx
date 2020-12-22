import React from "react";
import { connect } from "react-redux";
import { removeNominee } from "../redux/actions/nominationActions";
import Movie from "./Movie";

import "./styles/Nominations.scss";

const Nominations = ({ nominees }) => {
  return (
    <div
      className={`nominations-container ${!nominees.length > 0 ? `hide` : ``} `}
    >
      <div className="header">
        <div className="text-block">
          <h2>Your Nominations</h2>
        </div>
      </div>
      <div className="results-container">
        {nominees.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  nominees: state.nominations.nominees,
});

const mapDispatchToProps = (dispatch) => ({
  removeNominee: (nominee) => dispatch(removeNominee(nominee)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nominations);

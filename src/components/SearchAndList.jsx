import React, { useState } from "react";
import { connect } from "react-redux";
import "./styles/SearchAndList.scss";
import useSWR from "swr";

import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import Movie from "./Movie";

const SearchAndList = ({ nominees }) => {
  const [searchString, setSearchString] = useState("");
  const [isFocused, setFocus] = useState(false);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchString}&type=movie`;
  const { data } = useSWR(url);

  return (
    <div className="search-list-container">
      <div className="header">
        <div className="text-block">
          <h2>Nominify 🍿</h2>
          <p>
            Nominate 5 of your favorite movies!
            {nominees.length === 5
              ? `
✅`
              : ``}
          </p>
        </div>
        <div className={`input-wrapper ${isFocused ? `border` : ``}`}>
          <SearchIcon fill={isFocused ? `#000` : `grey`} width="1.6em" />
          <input
            type="text"
            name="search"
            id="search"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) => setSearchString(e.target.value)}
            placeholder={isFocused ? `` : `e.g. ShawShank Redemption`}
          />
        </div>
      </div>
      <div className="results-container">
        {searchString.length === 0 && (
          <h3 className="warning">Start by Searching with a Movie Title</h3>
        )}

        {data && data["Error"] === "Too many results." && (
          <h3 className="warning">A bit more specific please...</h3>
        )}

        {data && data["Error"] === "Movie not found!" && (
          <h3 className="warning">Movie not found</h3>
        )}

        {!data ? (
          <h3 className="warning">Loading...</h3>
        ) : !data["Error"] && data["Search"] ? (
          data["Search"].map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  nominees: state.nominations.nominees,
});

export default connect(mapStateToProps)(SearchAndList);

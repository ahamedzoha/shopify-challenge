import React, { useState } from "react";
import "./styles/SearchAndList.scss";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";

const SearchAndList = () => {
    const [searchString, setSearchString] = useState("");
    const [isFocused, setFocus] = useState(false);
    return (
        <div className="search-list-container">
            <div className="header">
                <h3>Search Movie by Title</h3>
                <div className={`input-wrapper ${isFocused ? `border` : ``}`}>
                    <SearchIcon
                        fill={isFocused ? `#000` : `grey`}
                        width="61px"
                    />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        onChange={(e) => setSearchString(e.target.value)}
                        placeholder={
                            isFocused ? `` : `e.g. ShawShank Redemption`
                        }
                    />
                </div>
            </div>
            <pre>
                {searchString} {isFocused}
            </pre>
        </div>
    );
};

export default SearchAndList;

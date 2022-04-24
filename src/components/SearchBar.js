import React, { useState, useEffect } from "react";
import artistService from "../services/artistService";
import { ArtistCard } from "./ArtistCard";
import { useCookies } from "react-cookie";

export const SearchBar = () => {
  //Local States
  const [artist, setArtist] = useState("");
  const [loading, setLoading] = useState("");
  //Cookies
  const [cookies, setCookie, removeCookie] = useCookies(["artist"]);

  //Take Artist from cookies if it doesn't exist in the local state yet
  useEffect(() => {
    if (artist === "" && cookies.artist) {
      setArtist(cookies.artist);
    }
  }, [artist]);
  
  //Once user presses enter on the search, we fetch the artist, clear local storage then store it in cookies and local state
  const handleKeyPress = async (e) => {
    if (e?.key === "Enter") {
      setLoading(true);
      removeCookie("artist", { path: "/" });
      setArtist("");
      const response = await artistService.getArtist(e?.target?.value);
      setArtist(response?.data);
      setCookie("artist", response?.data, { path: "/", sameSite: "lax" });
      setLoading(false);
    }
  };
  return (
    <div className="grid grid-cols-1">
      <div className="flex justify-center mt-4 ml-14">
        <div className="mb-3 xl:w-3/4">
          <div className="input-group relative flex items-stretch w-full mb-4 rounded">
            <input
              type="search"
              className="text-center form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search Artist Name"
              aria-label="Search"
              aria-describedby="button-addon2"
              onKeyPress={(e) => handleKeyPress(e)}
            />
            <span
              className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
              id="basic-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <ArtistCard artist={artist} loading={loading} />
    </div>
  );
};

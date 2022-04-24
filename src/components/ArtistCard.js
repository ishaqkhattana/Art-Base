/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Loader } from "./reusables/Loader";

export const ArtistCard = ({ artist, loading }) => {
  const navigate = useNavigate();

  const handleFetchEvents = (artist) => {
    navigate(`/events?artist=${artist?.name}`);
  };
  //Checking here if social links returned by the API are usernames or entire links
  const isValidURL = (string) => {
    var res = string.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return res !== null;
  };
  return artist !== "" ? (
    <div className="grid grid-cols-1 px-8 gap-8 mt-8 z-0 justify-items-center text-white">
      <div className="lg:w-1/4 w-full border-opacity-80 rounded-lg p-4 shadow-2xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none cursor-pointer">
        <a
          onClick={(e) => {
            e.stopPropagation();
            handleFetchEvents(artist);
          }}
        >
          <img
            className="border rounded-lg w-full mx-auto"
            src={artist?.image_url}
            alt="artist"
          />
          <p className="font-medium text-lg lg:text-2xl mt-4 text-gray-300">{artist?.name}</p>
          <div className="grid grid-cols-3 justify-items-center mt-4">
            {/* If there are no links, the API returns an empty string instead of
            an empty array, an inconsistency which has been handled below */}
            {Array.isArray(artist?.links)
              ? artist?.links.map((link, index) => {
                  //There is another inconsistency in the API. Sometimes it returns the social username and sometimes the entire URL
                  //I'll check here which it is, and pass it to the href accordingly
                  return link.type === "twitter" ? (
                    <a
                      key={index}
                      href={
                        isValidURL(link.url)
                          ? `${link.url}`
                          : `https://twitter.com/${link.url}`
                      }
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <FaTwitter />
                    </a>
                  ) : link.type === "instagram" ? (
                    <a
                      key={index}
                      href={
                        isValidURL(link.url)
                          ? `${link.url}`
                          : `https://instagram.com/${link.url}`
                      }
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <FaInstagram />
                    </a>
                  ) : link.type === "facebook" ? (
                    <a
                      key={index}
                      href={
                        isValidURL(link.url)
                          ? `${link.url}`
                          : `https://facebook.com/${link.url}`
                      }
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <FaFacebook />
                    </a>
                  ) : null;
                })
              : null}
          </div>
        </a>
      </div>
    </div>
  ) : loading ? (
    <Loader/>
  ) : null;
};

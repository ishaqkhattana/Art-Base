import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import artistService from "../services/artistService";
import { Loader } from "./reusables/Loader";

export const Events = () => {
  const [events, setEvents] = useState("");
  const [loading, setLoading] = useState(true);

  const search = useLocation().search;
  const artist = new URLSearchParams(search).get("artist");
  console.log("artist", artist);

  const getEvents = async (artist) => {
    setLoading(true);
    const res = await artistService.getEvents(artist);
    setLoading(false);
    setEvents(res.data);
  };
  useEffect(() => {
    getEvents(artist);
  }, []);

  return events.length !== 0 ? (
    <>
      <span class=" lg:text-2xl text-xl font-semibold whitespace-nowrap text-gray-300">
        Artist Events
      </span>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 px-40 gap-8 mt-8 z-0 justify-items-center mb-4">
        {events.map((event) => (
          <div className="bg-orange-800 w-full opacity-15 text-gray-300 opacity-90 border-opacity-80 rounded-lg p-4 shadow-3xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
            <br />
            <p className="font-medium text-lg lg:text-2xl">
              <span className="text-black">Country: </span>{" "}
              {event?.venue?.country}
            </p>
            <p className="font-medium text-base lg:text-xl mt-0 lg:mt-4">
              <span className="text-black">City: </span>
              {event?.venue?.city}
            </p>
            <p className="font-medium text-base lg:text-xl text-gray-300">
              <span className="text-black">Venue: </span>
              {event?.venue?.name}
            </p>
            <div className="grid grid-cols-1 justify-items-center text-black mt-4">
              <a
                href={`https://maps.google.com/?q=${event?.venue?.latitude},${event?.venue?.longitude}`}
                target="_blank"
                rel="noreferrer"
              >
                Open Maps <FaLocationArrow className="mx-auto" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : loading ? (
    <Loader />
  ) : events?.length === 0 ? (
    <div className="text-2xl text-white mt-8">
      No Upcoming Events for this Artist, Try searching Atif Aslam
    </div>
  ) : null;
};

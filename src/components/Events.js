import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { FaLocationArrow } from "react-icons/fa";
import artistService from "../services/artistService";
import { Loader } from "./reusables/Loader";

export const Events = () => {
  const [events, setEvents] = useState("");
  const [loading, setLoading] = useState(true);

  const search = useLocation().search;
  const artist = new URLSearchParams(search).get("artist");

  const getEvents = async (artist) => {
    setLoading(true);
    const res = await artistService.getEvents(artist);
    setLoading(false);
    setEvents(res.data);
  };
  useEffect(() => {
    getEvents(artist);
  }, [artist]);

  return events.length !== 0 ? (
    <>
      <span className=" lg:text-2xl text-xl font-semibold whitespace-nowrap text-gray-300 ml-4">
        Artist Events
      </span>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:px-40 px-4 gap-8 mt-8 z-0 justify-items-center mb-4">
        {events.map((event) => (
          <div className="bg-orange-800 w-full opacity-15 text-gray-300 opacity-90 border-opacity-80 rounded-lg p-4 shadow-3xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
            <div className="grid grid-cols-2 p-2">
              <div className="grid grid-cols-1 my-2">
                <span className="text-black text-xl">Country </span>
                <p className="text-lg lg:text-lg">{event?.venue?.country}</p>
              </div>
              <div className="grid grid-cols-1 my-2">
                <span className="text-black text-xl">City </span>
                <p className="text-base lg:text-lg mt-0">
                  {event?.venue?.city}
                </p>
              </div>
              <div className="grid grid-cols-1 my-2">
                <span className="text-black text-xl">Venue </span>
                <p className="text-base lg:text-lg text-gray-300">
                  {event?.venue?.name}
                </p>
              </div>
              <div className="grid grid-cols-1 my-2">
                <span className="text-black text-xl">Date </span>
                <p className="text-base lg:text-lg text-gray-300">
                  {moment(event?.starts_at).format("MMMM Do YYYY")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 justify-items-center text-black mt-2">
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

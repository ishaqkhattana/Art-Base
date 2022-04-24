/* eslint-disable no-useless-constructor */
import axiosInstance from "../@axios";

class ArtistService {
  async getArtist(artistName) {
    try {
      const url = `/artists/${artistName}?app_id=abc`;
      return await axiosInstance.get(url);
    } catch (err) {
      console.log("Error fetching artist", err);
    }
  }

  async getEvents(artistName) {
    try {
      const url = `/artists/${artistName}/events?app_id=abc&date=upcoming`;
      return await axiosInstance.get(url);
    } catch (err) {
      console.log("Error fetching events", err);
    }
  }
}

const artistService = new ArtistService();

export default artistService;

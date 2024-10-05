import axios from "axios";
import { IPlaylist } from "./types";

class HomeApi {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getPlaylists(): Promise<IPlaylist[]> {
    try {
      const response = await axios.get<{ playlists: IPlaylist[] }>(
        `${this.baseUrl}/playlists`
      );
      return response.data.playlists;
    } catch (error) {
      console.error("Error fetching playlists:", error);
      throw error;
    }
  }
}

export default HomeApi;

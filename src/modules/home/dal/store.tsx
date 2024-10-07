import { action, makeObservable, observable } from "mobx";
import HomeApi from "../api";
import { IPlaylist } from "../api/types";

export class HomeStore {
  protected readonly homeApi: HomeApi;

  playlists: IPlaylist[] = [];
  likedPlaylist: IPlaylist = {
    id: "",
    title: "",
    playlistsCover: "",
    songIds: [],
    isLikedPlaylist: true
  };

  constructor() {
    // TODO: убрать baseURL и сделать env
    this.homeApi = new HomeApi("http://localhost:3004");

    makeObservable(this, {
      playlists: observable,
      likedPlaylist: observable,

      getListPlaylists: action,
      getLikedPlaylist: action
    });
  }

  public getListPlaylists = (): Promise<void> =>
    this.homeApi
      .getPlaylists()
      .then((res) => {
        this.playlists = res;
      })
      .catch((error) => {
        console.error(error);
      });

  public getLikedPlaylist = (): Promise<void> =>
    this.homeApi
      .getLikedPlaylists()
      .then((res) => {
        this.likedPlaylist = res;
      })
      .catch((error) => {
        console.error(error);
      });
}

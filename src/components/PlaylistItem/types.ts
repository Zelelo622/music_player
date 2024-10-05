import { IPlaylist } from "../../modules/home/api/types";

export interface IPlaylistItemProps {
  data: IPlaylist;
  onClick?: (id: string) => void;
}

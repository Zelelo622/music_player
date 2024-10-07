import { generatePath, useNavigate } from "react-router";
import { FaPlay } from "react-icons/fa";
import { PLAYLIST_ROUTE } from "../../../../routes/constants";
import { IListItemProps } from "./types";

const HomePlaylistItem: React.FC<IListItemProps> = ({ playlistData }) => {
  const navigate = useNavigate();

  const handleClickPlaylist = (): void => {
    // TODO: нужно ли это вообще? Может быть просто оставить плей на листах?
    navigate(
      generatePath(`${PLAYLIST_ROUTE}/:id`, {
        id: playlistData.id
      })
    );
  };

  const playSoundPlaylist = (event: React.MouseEvent): void => {
    event.stopPropagation();
    // TODO логика для старта песен плейлиста
  };

  return (
    <div
      className="
        relative
        group
        flex
        items-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-100/10
        hover:bg-neutral-100/20
        transition
        pr-4
        cursor-pointer
    "
      onClick={handleClickPlaylist}>
      <div className="relative min-h-[64px] min-w-[64px]">
        <img
          className="object-cover h-[64px] w-[64px]"
          src={playlistData.playlistsCover}
          alt="Image"
        />
      </div>
      <p className="font-medium truncate py-5">{playlistData.title}</p>
      <button
        className="
        absolute
        transition
        opacity-0
        rounded-full
        flex
        items-center
        justify-center
        bg-green-500
        p-4
        drop-shadow-md
        right-5
        group-hover:opacity-100
        hover:scale-110
      "
        onClick={playSoundPlaylist}>
        <FaPlay className="text-black" />
      </button>
    </div>
  );
};

export default HomePlaylistItem;

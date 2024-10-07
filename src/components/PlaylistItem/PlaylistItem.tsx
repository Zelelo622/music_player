import { generatePath, useNavigate } from "react-router";
import { PLAYLIST_ROUTE } from "../../routes/constants";
import { IPlaylistItemProps } from "./types";

const PlaylistItem: React.FC<IPlaylistItemProps> = ({ data, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(generatePath(`${PLAYLIST_ROUTE}/:id`, { id: data.id }));
    if (onClick) {
      return onClick(data.id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="
    flex
    items-center
    gap-x-3
    cursor-pointer
    hover:bg-neutral-800/50
    w-full
    p-2
    rounded-md
  ">
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <img
          className="object-cover h-[48px] w-[48px]"
          src={data.playlistsCover || "src/assets/images/playlistCover.png"}
          alt="Image"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
      </div>
    </div>
  );
};

export default PlaylistItem;

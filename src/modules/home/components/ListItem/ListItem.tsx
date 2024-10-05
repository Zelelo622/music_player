import { useNavigate } from "react-router";
import { FaPlay } from "react-icons/fa";
import { ListItemProps } from "./types";

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const navigate = useNavigate();

  const handleClickPlaylist = (): void => {
    navigate(href);
  };

  return (
    <button
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
    ">
      <div className="relative min-h-[64px] min-w-[64px]">
        <img
          className="object-cover h-[64px] w-[64px]"
          src={image}
          alt="Image"
        />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div
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
      ">
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;

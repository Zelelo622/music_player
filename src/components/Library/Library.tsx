import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStores } from "../../dal";
import PlaylistItem from "../PlaylistItem/PlaylistItem";

const Library: React.FC = observer(() => {
  const {
    HomeStore: { playlists, getListPlaylists }
  } = useStores();

  // TODO: нужно протестировать при post запросе, будет список обнволяться?
  useEffect(() => {
    getListPlaylists();
  }, []);

  const handleAddPlaylist = (): void => {};

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Библиотека</p>
        </div>
        <AiOutlinePlus
          onClick={handleAddPlaylist}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {playlists.map((item) => (
          <PlaylistItem onClick={() => {}} key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
});

export default Library;

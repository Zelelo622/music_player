import { PLAYLIST_ROUTE } from "../../../../routes/constants";
import Header from "../../../../components/Header/Header";
import ListItem from "../../components/ListItem/ListItem";

const HomePage: React.FC = () => {
  // TODO: получать со стора нужный id плейлиста
  const playlistId = 1;

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">С возвращением</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem
              image="/src/assets/images/playlist-liked.png"
              name="Мне нравится"
              href={`${PLAYLIST_ROUTE}/${playlistId}`}
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Песни</h1>
        </div>
        <div>Список песен</div>
      </div>
    </div>
  );
};

export default HomePage;

import SearchPage from "../modules/home/pages/SearchPage";
import PlaylistPage from "../modules/home/pages/PlaylistPage";
import HomePage from "../modules/home/pages/HomePage";
import { IRouteType } from "./AppRoutes/types";
import { HOME_ROUTE, PLAYLIST_ROUTE, SEARCH_ROUTE } from "./constants";

export const publicRoutes: IRouteType[] = [
  {
    path: HOME_ROUTE,
    Component: HomePage
  },
  {
    path: SEARCH_ROUTE,
    Component: SearchPage
  },
  {
    path: PLAYLIST_ROUTE + "/:id",
    Component: PlaylistPage
  }
];

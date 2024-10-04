import HomePage from "../modules/home/pages/HomePage";
import { RouteType } from "./AppRoutes/types";
import { HOME_ROUTE } from "./constants";

export const publicRoutes: RouteType[] = [
  {
    path: HOME_ROUTE,
    Component: HomePage
  }
];

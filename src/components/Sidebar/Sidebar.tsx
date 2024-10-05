import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { useLocation } from "react-router";
import { HOME_ROUTE, SEARCH_ROUTE } from "../../routes/constants";
import Box from "../Box/Box";
import SidebarItem from "../SidebarItem/SidebarItem";
import Library from "../Library/Library";
import { ISidebarProps } from "./types";
import { observer } from "mobx-react-lite";

const Sidebar: React.FC<ISidebarProps> = observer(({ children }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Главная",
        active: pathname === HOME_ROUTE,
        href: HOME_ROUTE
      },
      {
        icon: BiSearch,
        label: "Поиск",
        active: pathname === SEARCH_ROUTE,
        href: SEARCH_ROUTE
      }
    ],
    [pathname]
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
});

export default Sidebar;

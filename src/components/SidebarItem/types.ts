import { IconType } from "react-icons";

export interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

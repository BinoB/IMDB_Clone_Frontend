import { MdOutlineManageAccounts } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";

import { MdOutlineRecentActors } from "react-icons/md";
import { MdRecentActors } from "react-icons/md";

const menu = [
  {
    title: "Add Movie",
    icon: <BiCameraMovie />,
    path: "/movie",
  },
  {
    title: "Add Actor",
    icon: <MdRecentActors />,
    path: "/actor",
  },
  {
    title: "Add Producer",
    icon: <MdOutlineRecentActors />,
    path: "/producer",
  },

  {
    title: "Profile",
    icon: <MdOutlineManageAccounts />,
    path: "/profile",
  },
];

export default menu;

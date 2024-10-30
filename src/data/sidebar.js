import { MdOutlineManageAccounts } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";

import { MdOutlineRecentActors } from "react-icons/md";
import { MdRecentActors } from "react-icons/md";

const menu = [
  {
    title: "Add Movie",
    icon: <BiCameraMovie />,
    path: "/addmovie",
  },
  {
    title: "Add Actor",
    icon: <MdRecentActors />,
    path: "/addactor",
  },
  {
    title: "Add Producer",
    icon: <MdOutlineRecentActors />,
    path: "/addproducer",
  },

  {
    title: "Profile",
    icon: <MdOutlineManageAccounts />,
    path: "/profile",
  },
];

export default menu;

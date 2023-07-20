import { CgFeed } from "react-icons/cg";
import { PiChatTeardropTextThin, PiShootingStarFill } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbUserCheck, TbUsersGroup, TbLogout } from "react-icons/tb";
import {
  MdOutlineBookmarkAdded,
  MdOutlineSettingsSuggest,
} from "react-icons/md";

const Menu = [
  {
    id: 1,
    icon: <CgFeed size={25} color="#667085" />,
    title: "Feed",
    active: true,
  },
  {
    id: 2,
    icon: <PiChatTeardropTextThin size={25} color="#667085" />,
    title: "Chat",
  },
  {
    id: 3,
    icon: <IoMdNotificationsOutline size={25} color="#667085" />,
    title: "Notification",
  },
  {
    id: 4,
    icon: <TbUserCheck size={25} color="#667085" />,
    title: "Profile",
  },
  {
    id: 5,
    icon: <TbUsersGroup size={25} color="#667085" />,
    title: "Group",
  },
  {
    id: 6,
    icon: <MdOutlineBookmarkAdded size={25} color="#667085" />,
    title: "Bookmark",
  },
  {
    id: 7,
    icon: <PiShootingStarFill size={25} color="#667085" />,
    title: "Premium",
  },
  {
    id: 8,
    icon: <MdOutlineSettingsSuggest size={25} color="#667085" />,
    title: "Settings",
  },
  {
    id: 9,
    icon: <TbLogout size={25} color="#667085" />,
    title: "Logout",
  },
];
const SideBar = () => {
  return (
    <div>
      {Menu.map((item) => {
        return (
          <div
            key={item.id}
            className={
              item.active
                ? "d-flex align-items-center label py-2 px-4 m-2 primary-600 rounded side"
                : "d-flex align-items-center label py-2 px-4 m-2"
            }
          >
            {item.icon}
            <p className={item.active ? "text-white m-0 ms-2 " : "m-0 ms-2"}>
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;

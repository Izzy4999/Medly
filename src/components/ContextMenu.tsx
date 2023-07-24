import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { CiVolumeHigh } from "react-icons/ci";
import { MdOutlineBlock } from "react-icons/md";
import { HiOutlineTrash } from "react-icons/hi";

interface Props {
  x: number | string;
  y: number | string;
  showMenu: boolean;
}
const ContextMenu = ({ showMenu, x, y }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        display: showMenu ? "" : "none",
        width: "200px",
        height: "185px",
        overflow: "hidden"
      }}
      className="rounded-3 cursor custom-shadow"
    >
      <p className="px-2 py-2 hover">Privacy & Support</p>
      <hr className="m-0" />
      <div className="">
        <div className="d-flex align-items-center  hover px-3 py-2">
          <BsCheck2 size={14} className="me-1" />
          <p>Mark as Unread</p>
        </div>
        <div className="d-flex align-items-center  hover px-3 py-2">
          <CiVolumeHigh size={14} className="me-1" />
          <p>Unmute Conversation</p>
        </div>
        <div className="d-flex align-items-center  hover px-3 py-2">
          <MdOutlineBlock size={14} className="me-1" />
          <p>Block</p>
        </div>
        <div className="d-flex align-items-center  hover px-3 py-2">
          <HiOutlineTrash size={14} className="me-1" />
          <p>Delete Chat</p>
        </div>
      </div>
    </div>
  );
};

export default ContextMenu;

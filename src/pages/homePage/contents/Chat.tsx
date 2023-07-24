/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { VscSend } from "react-icons/vsc";

import ChatBox from "../../../components/ChatBox";
import ContextMenu from "../../../components/ContextMenu";
import useRightClickMenu from "../../../hooks/useRightClickMenu";
import AppInput from "../../../components/AppInput";
import logo from "../../assets/prof.jpg";
import prof from "../../assets/prof2.jpg";

const Chat = () => {
  const { x, handleContextMenu, showMenu, y, selected } = useRightClickMenu();

  return (
    <section>
      <div style={{ marginLeft: "170px" }}>
        <div
          className="d-flex align-items-center fixed-top ms-2"
          style={{ width: "288px", left: "200px", top: "85px" }}
        >
          <AppInput
            name={"search"}
            iconleft="bi bi-search"
            placeholder="Search"
          />
          <div className="px-2 py-1 bg-light rounded-3 ms-2 ">
            <AiTwotoneStar className="text-success fs-4" />
          </div>
        </div>
        <div style={{ marginTop: "140px" }}>
          <div
            className="scroll ms-2"
            style={{ width: "330px", height: "480px" }}
          >
            {new Array(30)
              .fill({
                name: "Olivia Rhye",
                lastText: `is there anything exciting happening in your life that you
like to share?`,
                time: "11:12am",
                noOfUnread: 3,
                image: prof,
              })
              .map((chat: any, index) => {
                return (
                  <ChatBox
                    image={chat?.image}
                    chatName={chat.name}
                    lastText={chat.lastText}
                    time={chat.time}
                    noOfUnread={chat.noOfUnread}
                    key={index}
                    id={index + 1}
                    onContextMenu={(event: React.MouseEvent<HTMLDivElement>) =>
                      handleContextMenu(event, { ...chat, id: index + 1 })
                    }
                    selected={selected}
                  />
                );
              })}
          </div>
        </div>
        <div
          className="fixed-top custom-shadow me-3 rounded-3 chat"
          style={{ left: "560px", top: "80px" }}
        >
          <div className="d-flex justify-content-between align-item-center py-1 px-2">
            <div className="d-flex justify-content-start align-items-center ms-2 pt-1">
              <img
                src={logo}
                className="rounded-circle me-2"
                style={{ width: "40px", height: "40px" }}
              />
              <div>
                <p>Olivia Rhye</p>
                <p>
                  Active now <span></span>
                </p>
              </div>
            </div>
            <div className="me-3 align-self-center">
              <i className="bi bi-search bold mx-3"></i>
              <i className="bi  bi-three-dots-vertical mx-3"></i>
            </div>
          </div>
          <hr className="m-0 my-1 mx-1" />
          <div>
            <p className="bold text-center my-2">August 15, 2023</p>
          </div>
          <div className="chat__body scroll">
            <div className="reciever">
              <div className="d-flex align-items-center ms-2 me-4">
                <div className="align-self-end ms-2">
                  <img
                    src={logo}
                    className="rounded-circle"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <div className="rounded-end-2 rounded-top-2 primary-400 px-2 py-1 mx-2">
                  <p style={{ color: "#E6F2F9", fontSize: "12px" }}>
                    I hope you're having a great day so far. What's been keeping
                    you busy lately? Is there anything exciting happening in
                    your life that you'd like to share? Feel free to chat about
                    anything on your mind.
                  </p>
                </div>
                <div className="basic-50 rounded-circle px-1">
                  <i className="bi bi-three-dots"></i>
                </div>
              </div>
              <p className="time bold ms-5 py-2 px-3">9h ago</p>
            </div>
            <div className="send">
              <div className="d-flex align-items-center ms-2 ms-4">
                <div className="basic-50 rounded-circle px-1">
                  <i className="bi bi-three-dots"></i>
                </div>
                <div className="rounded-start-2 rounded-top-2 basic-50 px-2 py-1 mx-2">
                  <p style={{ color: "#667085", fontSize: "12px" }}>
                    I hope you're having a great day so far. What's been keeping
                    you busy lately? Is there anything exciting happening in
                    your life that you'd like to share? Feel free to chat about
                    anything on your mind.
                  </p>
                </div>
                <div className="align-self-end me-3">
                  <img
                    src={logo}
                    className="rounded-circle"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
              </div>
              <p className="time bold me-5 py-2 px-3 text-end">9h ago</p>
            </div>
          </div>
          <hr className="m-0 my-2 mx-1" />
          <div className="d-flex align-items-center mb-2 px-2">
            <AppInput
              name="message"
              iconright="bi bi-paperclip"
              placeholder="Type something here..."
              className="ms-1"
            />
            <div className=" ms-1 basic-100 py-1 px-2 rounded-3 text-center">
              <VscSend size={25} color="#667085" />
            </div>
          </div>
        </div>
      </div>
      <ContextMenu showMenu={showMenu} x={x} y={y} />
    </section>
  );
};

export default Chat;

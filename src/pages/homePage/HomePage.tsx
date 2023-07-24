/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { AiTwotoneStar } from "react-icons/ai";
import { VscSend } from "react-icons/vsc";

import logo from "../../assets/prof.jpg";
import image from "../../assets/bg.jpg";
import prof from "../../assets/prof2.jpg";
import medly from "../../assets/M5.png";
import AppInput from "../../components/AppInput";
import SideBar from "../../components/SideBar";
import ChatBox from "../../components/ChatBox";

const HomePage = () => {
  const posts = [
    {
      userPic: logo,
      profilePicture: logo,
      name: "Amani Osei",
      roles:
        "Doctor | Gynecologist | Health Adviser | Open to work from anywhere in the world as long as it is remote",
      location: "Ghana",
      time: "2hr",
      likes: 100,
      comments: 20,
      reposts: 1,
    },
    {
      userPic: prof,
      profilePicture: logo,
      name: "Phoebe Arnold",
      roles: "Student | Healthcare Enthusiast | Doctor in a bit",
      location: "Canada",
      time: "55m",
      likes: 10,
      comments: 20,
      reposts: 50,
    },
    {
      userPic: logo,
      profilePicture: prof,
      name: "Maria Diego",
      roles: "TED Speaker | Health | Motivational Speaker",
      location: "Bolivia",
      time: "2hr",
      likes: 430,
      comments: 320,
      reposts: 10,
    },
    {
      userPic: prof,
      profilePicture: logo,
      name: "Maria Diego",
      roles: "TED Speaker | Health | Motivational Speaker",
      location: "Bolivia",
      time: "2hr",
      likes: 430,
      comments: 320,
      reposts: 10,
    },
  ];

  const trending = [
    {
      trendingSector: "Health",
      engagement: 2550,
      trendingTopic: "Aproko Doctor",
      trendingNiche: "Trending",
    },
    {
      trendingSector: "Entertainment",
      engagement: 350,
      trendingTopic: "Bola Tinubu",
      trendingNiche: "News",
    },
    {
      trendingSector: "Sport",
      engagement: 4550,
      trendingTopic: "Messi",
      trendingNiche: "Football",
    },
    {
      trendingSector: "Health",
      engagement: 2550,
      trendingTopic: "Aproko Doctor",
      trendingNiche: "Trending",
    },
  ];

  const groups = [
    {
      groupImage: prof,
      groupName: "Sick Student",
      members: 10,
      membersImage: [medly, prof, image, logo],
    },
    {
      groupImage: prof,
      groupName: "Married",
      members: 10,
      membersImage: [medly, prof, image, logo],
    },
    {
      groupImage: prof,
      groupName: "Failed",
      members: 10,
      membersImage: [medly, prof, image, logo],
    },
    {
      groupImage: medly,
      groupName: "Medly",
      members: 10,
      membersImage: [medly, prof, image, logo],
    },
  ];

  const peopleToFollow = [
    {
      name: "John Ajayi",
      profilePic: logo,
      role: "Nursing Student, Berlin",
    },
    {
      name: "Tope Ajayi",
      profilePic: logo,
      role: "Nursing Student, Berlin",
    },
    {
      name: "John Blande",
      profilePic: logo,
      role: "Nursing Student, Berlin",
    },
    {
      name: "John Jacob",
      profilePic: logo,
      role: "Nursing Student, Berlin",
    },
    {
      name: "John Oyecherem",
      profilePic: logo,
      role: "Nursing Student, Berlin",
    },
  ];
  const chat = [
    {
      name: "Olivia Rhye",
      lastText: `s there anything exciting happening in your life that you
  like to share?`,
      time: "11:12am",
      noOfUnread: 3,
    },
  ];
  return (
    <div className="my-3 mx-4">
      <section className="header">
        <div className="px-4 py-3 d-flex justify-content-between align-items-center w-100 fixed-top bg-white">
          <div className=" d-flex align-items-center ms-1">
            <img
              src={medly}
              alt="logo"
              style={{ width: "43px", height: "43px" }}
              className="me-3"
            />
            <div style={{ width: "559px" }} className="ms-5">
              <AppInput
                name={"search"}
                placeholder="Search"
                iconleft="bi bi-search"
              />
            </div>
          </div>
          <div className="d-flex align-items-center me-5">
            <p className="m-0 me-3" style={{ fontSize: "18px" }}>
              Phoenix Baker
            </p>
            <img
              src={logo}
              style={{ width: "32px", height: "32px" }}
              className="rounded-circle"
            />
          </div>
        </div>
      </section>
      <section className="sidebar">
        <div
          style={{ width: "159px", marginTop: "75px" }}
          className="fixed-top ms-4"
        >
          <SideBar />
        </div>
      </section>
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
              style={{ width: "346px", height: "480px" }}
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
                    />
                  );
                })}
            </div>
          </div>
          <div
            className="fixed-top custom-shadow me-3 rounded-3 chat"
            style={{ left: "550px", top: "80px" }}
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
                      I hope you're having a great day so far. What's been
                      keeping you busy lately? Is there anything exciting
                      happening in your life that you'd like to share? Feel free
                      to chat about anything on your mind.
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
                      I hope you're having a great day so far. What's been
                      keeping you busy lately? Is there anything exciting
                      happening in your life that you'd like to share? Feel free
                      to chat about anything on your mind.
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
      </section>
    </div>
  );
};

export default HomePage;

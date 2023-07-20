import { BiVideoRecording } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineAudioFile } from "react-icons/md";
import { PiCaretDownLight, PiCaretUpLight } from "react-icons/pi";

import logo from "../../assets/prof.jpg";
import image from "../../assets/bg.jpg";
import prof from "../../assets/prof2.jpg";
import medly from "../../assets/M5.png";
import AppInput from "../../components/AppInput";
import SideBar from "../../components/SideBar";
import AppButton from "../../components/AppButton";
import Post from "../../components/Post";
import Trending from "../../components/Trending";
import { useState } from "react";
import Groups from "../../components/Groups";
const HomePage = () => {
  const [end, setEnd] = useState<number>(3);
  const [groupEnd, setGroupEnd] = useState<number>(3);
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
  return (
    <div className="my-3 mx-4">
      <div className="px-4 py-3 d-flex justify-content-between align-items-center w-100 fixed-top bg-white">
        <div className=" d-flex align-items-center">
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
      <div style={{ width: "159px", marginTop: "60px" }} className="fixed">
        <SideBar />
      </div>
      <div
        className="mt-2 d-flex justify-content-between"
        style={{ marginLeft: "170px" }}
      >
        <div
          className=" ms-2 scroll"
          style={{ width: "462px", marginTop: "50px" }}
        >
          <div className="custom-shadow p-3 mt-3 mx-1  bg-body rounded">
            <div className="d-flex align-items-center mx-auto">
              <img
                src={logo}
                style={{ width: "32px", height: "32px" }}
                className="ms-2 me-3 rounded-circle"
              />
              <AppInput name={"post"} placeholder="You want to share?" />
            </div>
            <div className="d-flex align-items-center mt-3">
              <AppButton
                title="Video"
                icon={
                  <BiVideoRecording className="fs-5 me-2" color="#667085" />
                }
                className={"border-0 bg-white ms-2"}
                style={{ color: "#667085" }}
              />
              <AppButton
                title="Photo"
                icon={<CiImageOn className="fs-5 me-2" color="#667085" />}
                className={"border-0 bg-white ms-2"}
                style={{ color: "#667085" }}
              />
              <AppButton
                title="Audio"
                icon={
                  <MdOutlineAudioFile className="fs-5 me-2" color="#667085" />
                }
                className={"border-0 bg-white ms-2"}
                style={{ color: "#667085" }}
              />
            </div>
          </div>
          {posts.map((post, index) => {
            return (
              <Post
                key={index}
                userPic={post.userPic}
                profilePicture={post.profilePicture}
                name={post.name}
                roles={post.roles}
                location={post.location}
                time={post.time}
                likes={post.likes}
                comments={post.comments}
                reposts={post.reposts}
              />
            );
          })}
        </div>
        <div>
          <div
            className="custom-shadow rounded  ms-5 fixed-top"
            style={{ width: "250px", top: "80px", left: "650px" }}
          >
            <div
              className="border overflow-hidden rounded w-100 image-container"
              style={{ height: "60px", backgroundImage: `url(${image})` }}
            ></div>
            <div className="image-holder">
              {" "}
              <img
                src={prof}
                style={{ width: "56px", height: "56px" }}
                className="rounded-circle"
              />
            </div>

            <div className="p-2 mt-4">
              <div>
                <h4 className="title2 text-center">Phonenix Baker</h4>
                <p className="text-center">
                  Product Designer | UI/UX Designer | Creative Problem Solver |
                  Front-end Development Enthusiast
                </p>
              </div>
              <hr />
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <p>Followers</p>
                  <p style={{ color: "#09379F" }}>5.3k</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p>Following</p>
                  <p style={{ color: "#09379F" }}>1000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p>Groups</p>
                  <p style={{ color: "#09379F" }}>1000</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div
          className="scroll me-4 "
          style={{ width: "310px", marginTop: "50px" }}
        >
          <div className="custom-shadow px-3 mt-2 mx-2 py-2 rounded">
            <h4 className="title2 bold mb-4">Trends & News for you</h4>
            {trending.slice(0, end).map((trending, index) => {
              return (
                <Trending
                  trendingSector={trending.trendingSector}
                  engagement={trending.engagement}
                  trendingTopic={trending.trendingTopic}
                  trendingNiche={trending.trendingNiche}
                  key={index}
                />
              );
            })}
            <hr className="m-0 my-2" />
            {trending.length > end && (
              <p
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setEnd(end + 3);
                }}
              >
                Show more <PiCaretDownLight />
              </p>
            )}
            {end > 3 && (
              <p
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setEnd(end - 3);
                }}
              >
                Show Less <PiCaretUpLight />
              </p>
            )}
          </div>
          <div className="custom-shadow px-3 py-2 mx-2 mt-3 rounded">
            <h4 className="title2 bold mb-4">Groups to join</h4>
            {groups.slice(0, groupEnd).map((group, index) => {
              return (
                <Groups
                  groupImage={group.groupImage}
                  groupName={group.groupName}
                  members={group.members}
                  membersImage={group.membersImage}
                />
              );
            })}
            <hr className="m-0 my-2" />
            {trending.length > groupEnd && (
              <p
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setGroupEnd(groupEnd + 3);
                }}
              >
                Show more <PiCaretDownLight />
              </p>
            )}
            {groupEnd > 3 && (
              <p
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setGroupEnd(groupEnd - 3);
                }}
              >
                Show Less <PiCaretUpLight />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

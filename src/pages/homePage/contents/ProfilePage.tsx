import { MdDriveFolderUpload } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import {
  PiUserSwitchThin,
  PiCaretDownLight,
  PiCaretUpLight,
} from "react-icons/pi";
import {
  SlLocationPin,
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";
import { BsCalendarDate } from "react-icons/bs";
import { useState } from "react";
import { BiVideoRecording } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineAudioFile } from "react-icons/md";

import AppInput from "../../../components/AppInput";
import AppButton from "../../../components/AppButton";
import Post from "../../../components/Post";
import People from "../../../components/People";
import Groups from "../../../components/Groups";

type Props = {
  profile: string;
  posts: {
    userPic: string;
    profilePicture: string;
    name: string;
    roles: string;
    location: string;
    time: string;
    likes: number;
    comments: number;
    reposts: number;
  }[];
  peopleToFollow: { name: string; role: string; profileImage: string }[];
  groups: {
    groupImage: string;
    groupName: string;
    members: number;
    membersImage: string[];
  }[];
};

const ProfilePage = ({ profile, posts, peopleToFollow, groups }: Props) => {
  const [groupEnd, setGroupEnd] = useState<number>(3);

  return (
    <>
      <div className="" style={{ marginLeft: "170px", marginTop: "80px" }}>
        <div
          className="border rounded-5 rounded-bottom bg-success mt-5 position-relative"
          style={{ height: "25vh" }}
        >
          <div className="position-absolute top-50" style={{ left: "80px" }}>
            <img
              src={profile}
              className="rounded-circle bg-white p-1"
              style={{ width: "15vh", height: "15vh" }}
            />
          </div>
          <button
            style={{ color: "#667085" }}
            className="primary-50 border-0 text position-absolute bottom-0 end-0 mb-3 me-4 rounded-2 px-3 py-1 d-flex justify-content-center align-items-center"
          >
            <MdDriveFolderUpload size={17} className="me-1" />
            Edit Cover Photo
          </button>
        </div>
        <div className="px-5 mt-3 py-2 d-flex justify-content-between align-items-center">
          <div className="ps-5">
            <h4 className="bold title1 m-0">Phonix Baker</h4>
            <p>Tech Recruiter</p>
          </div>
          <div className="d-flex align-items-center">
            <AiOutlineEye />
            <p className="ms-4">Edit basic info</p>
          </div>
        </div>
        <div className="d-flex mt-4 justify-content-around">
          <div className="custom-shadow px-4 py-3 rounded h-50">
            <h4 className="bold title1">Intro</h4>
            <div className="mt-3 cursor">
              <div className="d-flex align-items-center justify-content-start mb-1">
                <PiUserSwitchThin />
                <p className="ms-4">Male</p>
              </div>
              <div className="d-flex align-items-center justify-content-start mb-1">
                <BsCalendarDate />
                <p className="ms-4">June 18, 2022</p>
              </div>
              <div className="d-flex align-items-center justify-content-start mb-1">
                <SlLocationPin />
                <p className="ms-4">Lagos, Nigeria</p>
              </div>
              <div className="d-flex align-items-center justify-content-start mb-1">
                <SlSocialFacebook />
                <p className="ms-4">PhonixBaker</p>
              </div>
              <div className="d-flex align-items-center justify-content-start mb-1">
                <SlSocialInstagram />
                <p className="ms-4">PhonixBaker</p>
              </div>
              <div className="d-flex align-items-center justify-content-start mb-1">
                <SlSocialTwitter />
                <p className="ms-4">PhonixBaker</p>
              </div>
              <div className="d-flex align-items-center justify-content-start mb-1">
                <p title="53,498">53.4k</p>
                <p className="ms-2">Followers</p>
              </div>
              <div className="d-flex align-items-center justify-content-start mb-1">
                <p>2,300</p>
                <p className="ms-2">Following</p>
              </div>
              <p className="text-center mt-3">Edit details</p>
            </div>
          </div>
          <div>
            <div
              className=" ms-1 scroll"
              style={{ width: "462px", height: "50vh" }}
            >
              <div className="custom-shadow p-3 mx-1 mt-1  bg-body rounded">
                <div className="d-flex align-items-center mx-auto">
                  <img
                    src={profile}
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
                      <MdOutlineAudioFile
                        className="fs-5 me-2"
                        color="#667085"
                      />
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
              <div className="custom-shadow mx-2 px-2 over">
                <div className="d-flex scrollx w-100">
                  {peopleToFollow.map((people, index) => {
                    return (
                      <People
                        name={people.name}
                        role={people.role}
                        profileImage={people.profileImage}
                        key={index}
                      />
                    );
                  })}
                </div>
                <hr className="m-0 mt-3 mb-1" />
                <p className="text-center text-primary pb-1">
                  Show More <i className="bi bi-arrow-right"></i>
                </p>
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
          </div>
          <div>
            <div className="custom-shadow px-3 py-2 rounded">
              <h4 className="title2 bold mb-4 mt-2">Groups to join</h4>
              {groups.slice(0, groupEnd).map((group, index) => {
                return (
                  <Groups
                    groupImage={group.groupImage}
                    groupName={group.groupName}
                    members={group.members}
                    membersImage={group.membersImage}
                    key={index}
                  />
                );
              })}
              <hr className="m-0 my-2" />
              {groups.length > groupEnd && (
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
    </>
  );
};

export default ProfilePage;

import { BiVideoRecording } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineAudioFile } from "react-icons/md";
import { PiCaretDownLight, PiCaretUpLight } from "react-icons/pi";
import { useState } from "react";

import AppButton from "../../../components/AppButton";
import AppInput from "../../../components/AppInput";
import Trending from "../../../components/Trending";
import Groups from "../../../components/Groups";
import Post from "../../../components/Post";
import People from "../../../components/People";

interface Props {
  userPhoto: string;
  coverPhoto: string;
  userName: string;
  role: string;
  followers: number;
  following: number;
  groups: number;
  trending: {
    trendingSector: string;
    engagement: number;
    trendingTopic: string;
    trendingNiche: string;
  }[];
  groupArrays: {
    groupImage: string;
    groupName: string;
    members: number;
    membersImage: string[];
  }[];
  footer_image: string;
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
  peopleToFollow: {
    name: string;
    profilePic: string;
    role: string;
  }[];
}

const Feed = ({
  userPhoto,
  coverPhoto,
  role,
  userName,
  followers,
  following,
  groups,
  trending,
  groupArrays,
  footer_image,
  posts,
  peopleToFollow,
}: Props) => {
  const [end, setEnd] = useState<number>(3);
  const [groupEnd, setGroupEnd] = useState<number>(3);
  return (
    <>
      <section className="body">
        <div
          className="mt-2 d-flex justify-content-between"
          style={{ marginLeft: "170px" }}
        >
          <section>
            <div
              className=" ms-1 scroll"
              style={{ width: "462px", marginTop: "50px" }}
            >
              <div className="custom-shadow p-3 mt-3 mx-1  bg-body rounded">
                <div className="d-flex align-items-center mx-auto">
                  <img
                    src={userPhoto}
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
              <div className="custom-shadow mx-2 mb-2 px-2">
                <div className="d-flex scrollx w-100">
                  {peopleToFollow.map((people, index) => {
                    return (
                      <People
                        name={people.name}
                        role={people.role}
                        profileImage={people.profilePic}
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
            </div>
          </section>
          <section>
            <div
              className="custom-shadow rounded  ms-3 "
              style={{ width: "250px", marginTop: "65px" }}
            >
              <div
                className="border overflow-hidden rounded w-100 image-container"
                style={{
                  height: "60px",
                  backgroundImage: `url(${coverPhoto})`,
                }}
              ></div>
              <div className="image-holder">
                {" "}
                <img
                  src={userPhoto}
                  style={{ width: "56px", height: "56px" }}
                  className="rounded-circle"
                />
              </div>

              <div className="p-2 mt-4">
                <div>
                  <h4 className="title2 text-center">{userName}</h4>
                  <p className="text-center">{role}</p>
                </div>
                <hr />
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p>Followers</p>
                    <p style={{ color: "#09379F" }}>{followers}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p>Following</p>
                    <p style={{ color: "#09379F" }}>{following}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p>Groups</p>
                    <p style={{ color: "#09379F" }}>{groups}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </section>
          <section>
            <div
              className="scroll"
              style={{ width: "310px", marginTop: "60px" }}
            >
              <div className="custom-shadow px-3 mt-2 mx-2 py-2 rounded">
                <h4 className="title2 bold mb-4 mt-2">Trends & News for you</h4>
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
              <div className="custom-shadow px-3 py-2 mx-2 mt-3 mb-1 rounded">
                <h4 className="title2 bold mb-4 mt-2">Groups to join</h4>
                {groupArrays.slice(0, groupEnd).map((group, index) => {
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
                {groupArrays.length > groupEnd && (
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
            <section className="mt-2">
              <div className="d-flex align-items-center justify-content-center">
                <p className="me-3 footer_text">Terms of Service</p>
                <p className="me-3 footer_text">Privacy Policy</p>
                <p className="me-3 footer_text">Cookie Policy</p>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex align-items-center me-2">
                  <p className=" footer_text">Medly</p>
                  <img
                    src={footer_image}
                    style={{ width: "12px", height: "12px" }}
                  />
                </div>
                <p className="footer_text">Medly Global &copy; 2023</p>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};

export default Feed;

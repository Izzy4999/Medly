/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import logo from "../../assets/prof.jpg";
import image from "../../assets/bg.jpg";
import prof from "../../assets/prof2.jpg";
import medly from "../../assets/M5.png";
import AppInput from "../../components/AppInput";
import SideBar from "../../components/SideBar";
import ProfImage from "../../components/ProfImage";
import AppButton from "../../components/AppButton";
import Notification from "../../components/Notification";
import FriendCard from "../../components/FriendCard";

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
      <section className="sidebar h-100">
        <div
          style={{ width: "159px", marginTop: "75px" }}
          className="fixed-top ms-4"
        >
          <SideBar />
        </div>
      </section>
      <section>
        <div
          style={{ marginLeft: "170px" }}
          className="d-flex justify-content-between"
        >
          <div className="ms-3" style={{ width: "700px" }}>
            <div
              style={{ marginTop: "80px" }}
              className="d-flex justify-content-between px-2 py-3"
            >
              <p className="bold">Notification</p>
              <i className="bi bi-gear bold"></i>
            </div>
            <div className="px-5 py-3 scroll" style={{ height: "80vh" }}>
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={true}
                notification={false}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={true}
                notification={false}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={true}
                notification={false}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={true}
                notification={false}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={true}
                notification={false}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={true}
                notification={false}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={true}
                notification={false}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={true}
                notification={false}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={true}
                notification={false}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={true}
                notification={false}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={true}
                notification={false}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={true}
                notification={false}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={true}
                notification={false}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={true}
                notification={false}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={false}
                notification={true}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={true}
                notification={false}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={true}
                notification={false}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={true}
                notification={false}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={false}
                notification={true}
              />
              <Notification
                img_src={logo}
                message={"Joseph liked your photo"}
                time={"2 hour agp"}
                follow={false}
                notification={false}
              />
            </div>
          </div>
          <div>
            <div style={{ marginTop: "70px" }}>
              <div className="d-flex justify-content-between align-items-center px-3 mb-3">
                <ProfImage img_src={logo} />
                <ProfImage img_src={logo} />
                <ProfImage img_src={logo} />
                <ProfImage img_src={logo} />
              </div>
              <AppInput
                name={"search"}
                placeholder="Search"
                iconleft="bi bi-search"
              />
              <div className="d-flex justify-content-between align-itemss-center mt-3 px-1">
                <p className="bold">Friends</p>
                <i className="bi bi-three-dots"></i>
              </div>
            </div>
            <div className=" mt-2 me-5 py-3 scroll" style={{ height: "73vh" }}>
              <FriendCard img_src={prof} name={"Aliya Abubakar"} />
              <FriendCard img_src={prof} name={"Aliya Abubakar"} />
              <FriendCard img_src={prof} name={"Aliya Abubakar"} />
              <FriendCard img_src={prof} name={"Aliya Abubakar"} />
              <FriendCard img_src={prof} name={"Aliya Abubakar"} />
              <FriendCard
                img_src={prof}
                name={"Aliya Abubakar"}
                lastSeen="14:22PM"
              />
              <FriendCard img_src={prof} name={"Aliya Abubakar"} />
              <FriendCard img_src={prof} name={"Aliya Abubakar"} />
              <FriendCard img_src={prof} name={"Aliya Abubakar"} />
              <FriendCard
                img_src={prof}
                name={"Aliya Abubakar"}
                lastSeen="14:22PM"
              />
              <FriendCard img_src={prof} name={"Aliya Abubakar"} />
              <FriendCard img_src={prof} name={"Aliya Abubakar"} />
              <FriendCard img_src={prof} name={"Aliya Abubakar"} />
              <FriendCard
                img_src={prof}
                name={"Aliya Abubakar"}
                lastSeen="14:22PM"
              />
              <FriendCard img_src={prof} name={"Aliya Abubakar"} />
              <FriendCard img_src={prof} name={"Aliya Abubakar"} />
              <FriendCard
                img_src={prof}
                name={"Aliya Abubakar"}
                lastSeen="11:25AM"
              />
              <FriendCard img_src={prof} name={"Aliya Abubakar"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

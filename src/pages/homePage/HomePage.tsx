import { AiTwotoneStar } from "react-icons/ai";

import logo from "../../assets/prof.jpg";
import image from "../../assets/bg.jpg";
import prof from "../../assets/prof2.jpg";
import medly from "../../assets/M5.png";
import AppInput from "../../components/AppInput";
import SideBar from "../../components/SideBar";

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
  return (
    <div className="my-3 mx-4">
      <section className="header">
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
      </section>
      <section className="sidebar">
        <div style={{ width: "159px", marginTop: "75px" }} className="fixed-top ms-4">
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
          <div style={{marginTop:"150px"}}>
            <div className="scroll ms-2" style={{width:"346px"}}>
              <div className="d-flex align-items-center mb-3">
                <img src={prof} style={{ width:"40px", height:"40px"}} className="rounded-circle me-2" />
                <div className="me-3" style={{width:"146px"}}>
                  <p className="bold">Olivia Rhye</p>
                  <p className="text-truncate">
                    Is there anything exciting happening in your life that you'd
                    like to share?
                  </p>
                </div>
                <div>
                  <p className="m-0" style={{fontSize:"10px"}}>11:12am</p>
                  <span className="badge bg-primary m-0 ms-2" style={{fontSize:"8px"}}>2</span>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <img src={prof} style={{ width:"40px", height:"40px"}} className="rounded-circle me-2" />
                <div className="me-3" style={{width:"146px"}}>
                  <p className="bold">Olivia Rhye</p>
                  <p className="text-truncate">
                    Is there anything exciting happening in your life that you'd
                    like to share?
                  </p>
                </div>
                <div>
                  <p className="m-0" style={{fontSize:"10px"}}>11:12am</p>
                  <span className="badge bg-primary m-0 ms-2" style={{fontSize:"8px"}}>2</span>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <img src={prof} style={{ width:"40px", height:"40px"}} className="rounded-circle me-2" />
                <div className="me-3" style={{width:"146px"}}>
                  <p className="bold">Olivia Rhye</p>
                  <p className="text-truncate">
                    Is there anything exciting happening in your life that you'd
                    like to share?
                  </p>
                </div>
                <div>
                  <p className="m-0" style={{fontSize:"10px"}}>11:12am</p>
                  <span className="badge bg-primary m-0 ms-2" style={{fontSize:"8px"}}>2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

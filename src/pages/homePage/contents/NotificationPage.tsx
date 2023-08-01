import AppInput from "../../../components/AppInput";
import FriendCard from "../../../components/FriendCard";
import Notification from "../../../components/Notification";
import ProfImage from "../../../components/ProfImage";

type Props = {
  notifications: {
    img_src: string;
    message: string;
    time: string;
    follow: boolean;
    notification: boolean;
  }[];
  profiles: readonly [string, string, string, string];
  friends: { img_src: string; name: string; lastSeen?: string }[];
};

const NotificationPage = ({ notifications, profiles, friends }: Props) => {
  return (
    <>
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
            {notifications?.map((notification, index) => (
              <Notification
                img_src={notification.img_src}
                message={notification.message}
                time={notification.time}
                follow={notification.follow}
                notification={notification.notification}
                key={index}
              />
            ))}
          </div>
        </div>
        <div>
          <div style={{ marginTop: "70px" }}>
            <div className="d-flex justify-content-between align-items-center px-3 mb-3">
              {profiles.map((profile, index) => (
                <ProfImage img_src={profile} key={index} />
              ))}
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
            {friends.map((friend, index) => (
              <FriendCard
                img_src={friend.img_src}
                name={friend.name}
                lastSeen={friend.lastSeen}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationPage;

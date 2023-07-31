import ProfImage from "./ProfImage";

type Props = {
  img_src: string;
  message: string;
  time: string;
  follow: boolean;
  notification: boolean;
};

const Notification = ({
  img_src,
  message,
  time,
  follow,
  notification,
}: Props) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center py-1">
        <div className="d-flex justify-content-start align-center">
          <ProfImage img_src={img_src} />
          <div className="ms-3">
            <p>{message}</p>
            <p>{time}</p>
          </div>
        </div>
        {notification && <i className="bi bi-dot text-danger fs-3 me-2"></i>}
        {follow ? (
          <button
            className="rounded-2 border-0 primary-500 px-3 py-2 text-white"
            style={{ fontSize: "12px" }}
          >
            Follow back
          </button>
        ) : !notification ? (
          <button
            className="rounded-2 border bg-white px-3 py-1"
            style={{ fontSize: "12px", color: "#667085" }}
          >
            Followed
          </button>
        ) : null}
      </div>
    </>
  );
};

export default Notification;

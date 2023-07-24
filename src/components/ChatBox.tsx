interface Props {
  image: string;
  chatName: string;
  lastText: string;
  time: string;
  noOfUnread: number;
}
const ChatBox = ({ image, chatName, lastText, noOfUnread, time }: Props) => {
  return (
    <>
      <div className="d-flex align-items-center mb-3">
        <img
          src={image}
          style={{ width: "40px", height: "40px" }}
          className="rounded-circle me-2"
        />
        <div className="me-3" style={{ width: "146px" }}>
          <p className="bold">{chatName}</p>
          <p className="text-truncate">{lastText}</p>
        </div>
        <div>
          <p className="m-0" style={{ fontSize: "10px" }}>
            {time}
          </p>
          <span
            className="badge bg-primary m-0 ms-2"
            style={{ fontSize: "8px" }}
          >
            {noOfUnread}
          </span>
        </div>
      </div>
    </>
  );
};

export default ChatBox;

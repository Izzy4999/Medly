interface Props {
  image: string;
  id:number;
  chatName: string;
  lastText: string;
  time: string;
  noOfUnread: number;
  onContextMenu: (event: React.MouseEvent<HTMLDivElement>)=>  void;
  selected: any;
}
const ChatBox = ({ image, id, chatName, lastText, noOfUnread, time, onContextMenu, selected }: Props) => {
   return (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  <div className={selected?.id === id ? "basic-100" :"box_hover"}>
      <div
        className="d-flex align-items-center px-3 py-2 hover"
        onContextMenu={onContextMenu}
      >
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
    </div>
  );
};

export default ChatBox;

import ProfImage from "./ProfImage";

type Props = {
  img_src: string;
  name: string;
  lastSeen?: string;
};

const FriendCard = ({ img_src, name, lastSeen }: Props) => {
  return (
    <>
      <div className="d-flex justify-content-start align-items-center px-2 py-1">
        <ProfImage img_src={img_src} />
        <p className="bold ms-2">{name}</p>
        {lastSeen && (
          <p className="ms-3" style={{ fontSize: "10px", color: "#667085" }}>
            {lastSeen}
          </p>
        )}
      </div>
    </>
  );
};

export default FriendCard;

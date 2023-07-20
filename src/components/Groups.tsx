import AppButton from "./AppButton";

interface Props {
  groupImage: string;
  groupName: string;
  members: number;
  membersImage: string[];
}
const Groups = ({ groupImage, members, groupName, membersImage }: Props) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mx-1 mb-2">
        <div className="d-flex align-items-center">
          <img
            src={groupImage}
            className="rounded me-1"
            style={{ width: "60px", height: "60px" }}
          />
          <div>
            <p className="label">{groupName}</p>
            <p className="text">{members} members</p>
            <div className="d-flex align-items-center">
              {membersImage.map((image, index) => (
                <img
                  src={image}
                  className="rounded-circle"
                  style={{ width: "20px", height: "20px" }}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <button className="border-0 bg-primary text-white px-3 py-1 rounded">Join</button>
      </div>
    </div>
  );
};

export default Groups;

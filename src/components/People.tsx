import AppButton from "./AppButton";

interface Props {
  name: string;
  role: string;
  profileImage: string;
}
const People = ({ name, profileImage, role }: Props) => {
  return (
    <div
      className="border mx-2 p-3 pb-3 rounded-2  text-center mt-2"
      style={{ width: "180px", height: "160px" }}
    >
      <img
        src={profileImage}
        className="rounded-circle"
        style={{ width: "39px", height: "39px" }}
      />
      <p className="title2 bold">{name}</p>
      <p className="text text-trauncate">{role}</p>
      <AppButton title={"Follow"} className={"bg-primary text-white"} />
    </div>
  );
};

export default People;

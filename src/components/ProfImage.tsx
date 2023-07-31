

interface Props {
  img_src: string;
}

const ProfImage = ({ img_src }: Props) => {
  return (
    <img
      src={img_src}
      className="rounded-circle"
      style={{ width: "40px", height: "40px" }}
    />
  );
};

export default ProfImage;

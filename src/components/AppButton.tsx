import { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
  title: string;
  className: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}

const AppButton = ({ title, className, style, icon, ...rest }: Props) => {
  return (
    <button
      style={style}
      className={`d-flex justify-content-center align-items-center text-center px-4 py-2 w-100 border rounded button_title fs-6 ${className}`}
      {...rest}
    >
      {icon}
      {title}
    </button>
  );
};

export default AppButton;

import React, { ComponentProps } from "react";

interface Props extends ComponentProps<"input"> {
  iconleft?: string;
  iconright?: string;
  placeholder?: string;
  name: string;
  error?: unknown;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | Promise<void>;
  onClick?: () => void;
}

const AppInput = ({
  name,
  error,
  onChange,
  iconleft,
  iconright,
  placeholder,
  onClick,
  ...rest
}: Props) => {
  return (
    <div
      className={
        error
          ? "d-flex border border-danger rounded p-1 align-items-center justify-content-center"
          : "d-flex border rounded p-1 align-items-center justify-content-center"
      }
    >
      {iconleft && (
        <i className={`${iconleft} ps-1 icon-color`} onClick={onClick}></i>
      )}
      <input
        className="px-2 fs-6"
        style={{
          width: "100%",
          border: "none",
          outline: "none",
          color: "#B1B1B1",
        }}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        {...rest}
      />
      {iconright && (
        <i
          className={`${iconright} pe-1 icon-color fs-6`}
          onClick={onClick}
        ></i>
      )}
    </div>
  );
};

export default AppInput;

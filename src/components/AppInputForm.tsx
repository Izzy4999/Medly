/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ComponentProps } from "react";
import AppInput from "./AppInput";
import { useFormikContext } from "formik";
import AppErrorMessage from "./AppErrorMessage";

interface Props extends ComponentProps<"input"> {
  name: string;
  label: string;
  placeholder?: string;
  icon?: string;
  onClick?: () => void;
}

const AppInputForm = ({
  name,
  label,
  placeholder,
  icon,
  onClick,
  ...rest
}: Props) => {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();

  return (
    <div className="mb-3">
      <label className="mb-2 label">{label}</label>
      <AppInput
        name={name}
        placeholder={placeholder}
        iconright={icon}
        onChange={handleChange}
        onBlur={() => {
          setFieldTouched(name);
        }}
        value={values ? values[name as keyof typeof values] : ""}
        onClick={onClick}
        {...rest}
      />
      <AppErrorMessage
        error={errors[name as keyof typeof errors]}
        visible={touched[name as keyof typeof touched]}
      />
    </div>
  );
};

export default AppInputForm;

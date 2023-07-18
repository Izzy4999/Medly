import React, { ComponentProps } from "react";
import { useFormikContext } from "formik";

import AppButton from "./AppButton";

interface Props extends ComponentProps<"button"> {
  title: string;
  icon: React.ReactNode;
  className: string;
}

const AppFormButton = ({ title, icon, className, ...rest }: Props) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      className={className}
      icon={icon}
      onClick={() => handleSubmit}
      type="submit"
      {...rest}
    />
  );
};

export default AppFormButton;

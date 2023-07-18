import { Formik, FormikValues } from "formik";

interface Props {
  validationSchema: unknown;
  initialValues: FormikValues;
  onSubmit: <T extends FormikValues>(values: T, onSubmitProps: any) => void;
  children: React.ReactNode;
}

const AppForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <> {children}</>}
    </Formik>
  );
};

export default AppForm;

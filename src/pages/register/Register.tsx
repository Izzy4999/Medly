import { Form } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { FcGoogle } from "react-icons/fc";

import logo from "../../assets/M5.png";
import sideImage2 from "../../assets/Frame 29.png";
import AppForm from "../../components/AppForm";
import AppInputForm from "../../components/AppInputForm";
import AppFormButton from "../../components/AppFormButton";
import AppButton from "../../components/AppButton";

// interface Props

const Register = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [firstData, setFirstData] = useState<boolean>(true);
  const validationSchema = firstData
    ? yup.object().shape({
        firstName: yup.string().required("First Name required"),
        lastName: yup.string().required("Last Name required"),
        email: yup.string().email().required("Email is required"),
      })
    : yup.object().shape({
        gender: yup.string().required("Gender required"),
        password: yup.string().required("Password is required"),
        confirm_password: yup
          .string()
          .oneOf([yup.ref("password")], "Passwords must match"),
      });
  return (
    <div className="container mt-3">
      <div className="row m-3">
        <div className="col-md-6 mt-3">
          <div style={{ width: "327px", height: "511px" }}>
            <div className="mb-4 text-center">
              <img src={logo} className="image_height" />
            </div>
            <div>
              <h3 className="h4 bold">Sign Up</h3>
              <p className="label">
                Please fill with your correct details to create your account.
              </p>
            </div>
            <div>
              <AppForm
                validationSchema={validationSchema}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, { resetForm }) => {
                  console.log(values);
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                  resetForm();
                }}
              >
                <Form>
                  {firstData && (
                    <>
                      <AppInputForm
                        name={"firstName"}
                        label={"First Name"}
                        placeholder="First name"
                      />
                      <AppInputForm
                        name={"lastName"}
                        label={"Last Name"}
                        placeholder="Last name"
                      />
                      <AppInputForm
                        name={"email"}
                        label={"Email"}
                        placeholder="@email.com"
                        icon="bi bi-x-circle mx-2"
                      />
                    </>
                  )}
                  {!firstData && (
                    <>
                      <AppInputForm
                        name={"password"}
                        label={"Password"}
                        placeholder={"password"}
                        type={showPassword ? "text" : "password"}
                        icon={
                          showPassword
                            ? "bi bi-eye-slash me-2"
                            : "bi bi-eye me-2"
                        }
                        onClick={() => setShowPassword(!showPassword)}
                      />
                      <AppInputForm
                        name={"password"}
                        label={"Password"}
                        placeholder={"password"}
                        type={showPassword ? "text" : "password"}
                        icon={
                          showPassword
                            ? "bi bi-eye-slash mx-2"
                            : "bi bi-eye mx-2"
                        }
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      />
                      <AppInputForm
                        name={"confirm_password"}
                        label={"Confirm password"}
                        placeholder={"Confirm password"}
                        type={showPassword ? "text" : "password"}
                        icon={
                          showPassword
                            ? "bi bi-eye-slash mx-2"
                            : "bi bi-eye mx-2"
                        }
                        onClick={() => setShowPassword(!showPassword)}
                      />
                      <div className="my-2 d-flex justify-content-start align-items-start d-md-none d-lg-none d-xl-none">
                        <input
                          name={"remember"}
                          style={{ border: "1px solid #D0D5DD" }}
                          type="checkbox"
                        />
                        <p className="ms-2 text">
                          I’m at least 18 years old and agree to the following
                          terms By tapping the check box. I’ve read and agree to
                          the M-Sign Disclosure and Consent to receive all
                          communication electronically{" "}
                        </p>
                      </div>
                    </>
                  )}
                  {firstData ? (
                    <AppButton
                      title={"Next"}
                      className={"primary-600 text-white"}
                      onClick={() => setFirstData(!firstData)}
                    />
                  ) : (
                    <AppFormButton
                      title={"Sign Up"}
                      icon={undefined}
                      className={"primary-600 text-white"}
                    />
                  )}
                </Form>
              </AppForm>
            </div>
            <AppButton
              title={"Sign in with Google"}
              className={"my-3"}
              style={{ backgroundColor: "transparent" }}
              icon={<FcGoogle className="me-2" />}
            />
            <p className="label text-center">
              Don't have an account?{" "}
              <span className="label" style={{ color: "#09379F" }}>
                Sign up
              </span>
            </p>
          </div>
        </div>
        <div className="col-md-6 d-none d-lg-block">
          <img src={sideImage2} width={600} height={629} />
        </div>
      </div>
    </div>
  );
};

export default Register;

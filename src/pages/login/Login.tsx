import { Form } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { FcGoogle } from "react-icons/fc";

import logo from "../../assets/M5.png";
import sideImage2 from "../../assets/Frame 29 (2).png";
import AppForm from "../../components/AppForm";
import AppInputForm from "../../components/AppInputForm";
import AppFormButton from "../../components/AppFormButton";
import AppButton from "../../components/AppButton";

const validationSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
});
// interface Props

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="container mt-3">
      <div className="row m-3">
        <div className="col-md-6 mt-5">
          <div style={{ width: "327px", height: "511px" }}>
            <div className="mb-5 text-center">
              <img src={logo} className="image_height" />
            </div>
            <div>
              <h3 className="h4 bold">Login</h3>
              <p className="label">
                Please fill your details to access your account
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
                  <AppInputForm
                    name={"email"}
                    label={"Email"}
                    placeholder="@email"
                    icon="bi bi-x-circle me-2"
                  />
                  <AppInputForm
                    name={"password"}
                    label={"Password"}
                    placeholder={"password"}
                    type={showPassword ? "text" : "password"}
                    icon={
                      showPassword ? "bi bi-eye-slash me-2" : "bi bi-eye me-2"
                    }
                    onClick={() => setShowPassword(!showPassword)}
                  />
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="d-flex justify-content-start align-items-center">
                      <input
                        name={"remember"}
                        style={{ border: "1px solid #D0D5DD" }}
                        type="checkbox"
                      />
                      <p className="label m-0 ms-1">Remeber me</p>
                    </div>
                    <p className="label m-0" style={{ color: "#09379F" }}>
                      Forgot password?
                    </p>
                  </div>
                  <AppFormButton
                    title={"Login"}
                    icon={undefined}
                    className={"primary-600 text-white"}
                  />
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

export default Login;

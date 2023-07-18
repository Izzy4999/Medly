import React from "react";
import * as Yup from "yup";
import { Form } from "formik";

import logo from "../../assets/M5.png";
import AppForm from "../../components/AppForm";
import AppFormButton from "../../components/AppFormButton";

const validationSchema = Yup.object().shape({
  first: Yup.string().required(),
  second: Yup.string().required(),
  third: Yup.string().required(),
  fourth: Yup.string().required(),
});
const Verification = () => {
  return (
    <div>
      <div className="ms-5 ps-5 mt-4">
        <img src={logo} className="image_height" />
      </div>
      <div className="text-center">
        <h1 className="h2 bold mt-3 m-0">OTP Verification</h1>
        <p className="m-0 text" style={{ color: "#667085" }}>
          An OTP has been sent to (+234) 70 3987 4562
        </p>
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "90px" }}
      >
        <AppForm
          validationSchema={validationSchema}
          initialValues={{ first: 0, second: 0, third: 0, fourth: 0 }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
          }}
        >
          <Form>
            <div
              style={{ width: "356px" }}
              className="d-flex align-items-start"
            >
              <div
                style={{
                  borderRadius: "8px",
                  border: "2px solid #d0d5dd",
                  width: "80px",
                }}
                className="d-flex justify-content-center align-items-center me-2"
              >
                <input
                  style={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                    color: "#B1B1B1",
                    fontSize: "48px",
                  }}
                  className="px-4"
                  placeholder={"0"}
                  pattern={"[0-9]"}
                  name={"first"}
                  maxLength={1}
                  type="text"
                />
              </div>
              <div
                style={{
                  borderRadius: "8px",
                  border: "2px solid #d0d5dd",
                  width: "80px",
                }}
                className="d-flex justify-content-center align-items-center me-2"
              >
                <input
                  style={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                    color: "#B1B1B1",
                    fontSize: "48px",
                  }}
                  className="px-4"
                  placeholder={"0"}
                  name={"second"}
                  maxLength={1}
                  type="text"
                />
              </div>
              <div
                style={{
                  borderRadius: "8px",
                  border: "2px solid #d0d5dd",
                  width: "80px",
                }}
                className="d-flex justify-content-center align-items-center me-2"
              >
                <input
                  style={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                    color: "#B1B1B1",
                    fontSize: "48px",
                  }}
                  className="px-4"
                  placeholder={"0"}
                  name={"third"}
                  maxLength={1}
                  type="text"
                />
              </div>
              <div
                style={{
                  borderRadius: "8px",
                  border: "2px solid #d0d5dd",
                  width: "80px",
                }}
                className="d-flex justify-content-center align-items-center me-2"
              >
                <input
                  style={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                    color: "#B1B1B1",
                    fontSize: "48px",
                  }}
                  className="px-4"
                  placeholder={"0"}
                  name={"fourth"}
                  maxLength={1}
                  type="text"
                />
              </div>
            </div>
            <p className="label text-center mt-5">
              Didn't recieve OTP?{" "}
              <span className="label" style={{ color: "#09379F" }}>
                Resend
              </span>
            </p>
            <div className="mt-5">
                  <AppFormButton title={"Verify"} icon={undefined} className={"primary-600 text-white"} />
            </div>
          </Form>
        </AppForm>
      </div>
    </div>
  );
};

export default Verification;

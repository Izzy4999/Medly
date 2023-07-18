import { TbFileUpload } from "react-icons/tb";
import { useState } from "react";

import logo from "../../assets/M5.png";
import AppButton from "../../components/AppButton";
import AddPhotoModal from "./modal/AddPhotoModal";

const ImageUpload = () => {
  const [isUpload, setIsUpload] = useState<boolean>(false);

  return (
    <div>
      <div className="ms-5 ps-5 mt-4">
        <img src={logo} className="image_height" />
      </div>
      <div className="row mt-5">
        <div className="col-md-6 mt-4 d-flex justify-content-center">
          <div>
            <div className="text-center">
              <h1 className="h4 bold">Upload Image</h1>
              <p className="text">The image to display in in your profile</p>
            </div>
            <div
              className="border rounded-circle text-center mt-4 mx-auto d-flex flex-column justify-content-center align-items-center"
              style={{ width: "169px", height: "169px" }}
              onClick={() => setIsUpload(!isUpload)}
            >
              <TbFileUpload className="fs-5" />
              <p className="m-0">Upload Image</p>
              <p className="m-0">png/jpg</p>
            </div>
            <p className="text-center mt-3 text-secondary">Cancel</p>
          </div>
        </div>
        <div className="col-md-6 p-3">
          <div className="row">
            <div className="col-md-1"></div>
            <div
              className="col-md-8 mt-4"
              onClick={() => setIsUpload(!isUpload)}
            >
              <p>Upload image file</p>
              <div className="d-flex justify-content-between align-items-center border rounded py-1 px-3">
                <p className="m-0">Png & Jpg</p>
                <i className="bi bi-file-earmark-image text-secondary fs-4"></i>
              </div>
              <p className="mt-3">
                Please take into consideration that the image uploaded is what
                will display for others to see{" "}
              </p>
              <AppButton
                title={"Upload Image"}
                className={"text-white primary-600 mt-5"}
                onClick={() => setIsUpload(!isUpload)}
              />
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center mt-5">
        <p className="text-primary me-5">Skip</p>
      </div>
      <AddPhotoModal isUpload={isUpload} setIsUpload={setIsUpload} />
    </div>
  );
};

export default ImageUpload;

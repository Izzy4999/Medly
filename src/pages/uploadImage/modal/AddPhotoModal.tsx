/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

interface Props {
  isUpload: boolean;
  setIsUpload: (value: boolean) => void;
}
const AddPhotoModal = ({ isUpload, setIsUpload }: Props) => {
  const [files, setFiles] = useState<any>();

  const onHide = (): void => setIsUpload(!isUpload);

  const handleFileChange = (event: any) => {
    setFiles(event?.target.files[0] as File);
  };

  return (
    <Modal show={isUpload} backdrop="static" centered>
      <Modal.Body>
        <div className="p-5 text-center">
          <label htmlFor="image_upload" className="m-0 label">
            Upload from Device
          </label>
          <input
            type="file"
            id="image_upload"
            onChange={handleFileChange}
            accept=".jpg,.png,.jpeg,.gif"
            className="d-none"
          />
          <hr className="my-1" />
          <p className="m-0">Take Photo</p>
        </div>
        <hr />
        <div className="d-flex justify-content-end align-items-center">
          <p className="text-primary m-0 my-1" style={{cursor: "pointer"}} onClick={onHide}>
            Cancel
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddPhotoModal;

import { IoIosMore } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { AiOutlineComment } from "react-icons/ai";
import { HiOutlineShare } from "react-icons/hi";
import { BiRepost } from "react-icons/bi";
import { HiOutlineGif } from "react-icons/hi2";
import { RiEmojiStickerLine } from "react-icons/ri";
import { IoImageOutline } from "react-icons/io5";

interface Props {
  userPic: string;
  profilePicture: string;
  name: string;
  roles: string;
  location: string;
  time: string;
  images?: string[];
  likes: number;
  comments: number;
  reposts: number;
}

const Post = ({
  userPic,
  images,
  profilePicture,
  name,
  roles,
  location,
  time,
  likes,
  comments,
  reposts,
}: Props) => {
  return (
    <>
      <div className="custom-shadow p-3 my-3 mx-1   rounded">
        <div className="d-flex justify-content-between align-item-center">
          <div className="d-flex align-items-start">
            <img
              src={profilePicture}
              style={{ width: "32px", height: "32px" }}
              className="ms-2 me-3 rounded-circle"
            />
            <div>
              <p className="mb-2 title2">{name}</p>
              <p className="text truncate">{roles}</p>
              <div className="d-flex align-items-center">
                <p className="text me-0">
                  {time}
                </p>
               <p className="pb-1 fw-bold" style={{margin: "0px 5px"}}>.</p>
                <p className="text ms-0">
                {location}
                </p>
              </div>
            </div>
          </div>
          <IoIosMore />
        </div>
        {images && (
          <div
            style={{ width: "422px", height: "251px" }}
            className="border rounded mt-3"
          ></div>
        )}
        <div className="d-flex justify-content-between align-items-center mt-1 mb-1">
          <div className="d-flex align-items-center">
            <FcLike />
            <p>{likes}</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="me-4">{comments} comments</p>
            <p className="me-4">{reposts} Reposts</p>
          </div>
        </div>
        <hr className=" m-0" />
        <div className="d-flex justify-content-between align-items-center">
          <button
            style={{ color: "#667085" }}
            className="bg-white px-2 py-1 d-flex align-items-center border-0 button_text"
          >
            <i className="bi bi-heart me-2"></i>Like
          </button>
          <button
            style={{ color: "#667085" }}
            className="bg-white d-flex px-2 py-1  align-items-center border-0 button_text"
          >
            <AiOutlineComment className="me-2" />
            Comment
          </button>
          <button
            style={{ color: "#667085" }}
            className="bg-white px-2 py-1  d-flex align-items-center border-0 button_text"
          >
            <HiOutlineShare className="me-2" />
            Share
          </button>
          <button
            style={{ color: "#667085" }}
            className="bg-white px-2 py-1  d-flex align-items-center border-0 button_text"
          >
            <BiRepost className="me-2" />
            Repost
          </button>
        </div>
        <hr className="m-0" />
        <div className="d-flex mt-2">
          <div className="d-flex align-items-center border rounded py-1 px-3 w-100">
            <img
              src={userPic}
              style={{ width: "28px", height: "28px" }}
              className="me-1 rounded-circle"
            />
            <input
              placeholder="Write a comment..."
              className="px-2 fs-6"
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                color: "#B1B1B1",
              }}
              name={"comment"}
            />
            <div className="d-flex align-items-center">
              <HiOutlineGif className="me-1" size={20} />
              <RiEmojiStickerLine className="me-1" size={20} />
              <IoImageOutline className="me-1" size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

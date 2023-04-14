import { useState } from "react";
import "./DisplayComments.css";
// import iconer from "./icons/likeicon.png";
const DisplayComments = (props) => {
  const [like, setLike] = useState(23);
  const [activebtn, setActivebtn] = useState("none");
  let newlike;
  function handleClick(event) {
    if (activebtn === "none") {
      setLike(like + 1);
      setActivebtn("like");
    } else if (activebtn === "like") {
      setLike(like - 1);
      setActivebtn("none");
    }
  }
  return (
    <div>
      <ul>
        {props.parentEntry.map((each_entry) => {
          return (
            <li class="comment_list">
              {each_entry + " "}

              <button
                onClick={handleClick}
                className={`button ${
                  activebtn === "like" ? "like-active" : ""
                }`}
              >
                {like + "Likes"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayComments;

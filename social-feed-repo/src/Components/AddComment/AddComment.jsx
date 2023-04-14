import { useState } from "react";
import "./AddComments.css";
const AddComment = (props) => {
  const [comment, setComment] = useState("S");
  function handleSubmit(event) {
    event.preventDefault();
    let newComment = {
      passedcomment: comment,
    };
    console.log(newComment);
    props.parentComment(newComment.passedcomment);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Comment Here:</label>
        <input
          type="text"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <button type="submit">ADD COMMENT</button>
      </form>
    </div>
  );
};

export default AddComment;

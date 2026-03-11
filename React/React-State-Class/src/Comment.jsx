import { useState } from "react";
import "./Comment.css";
import ComentsForm from "./ComentsForm";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@axisOfResistance",
      remark: "Freedom Fighter",
      rating: 5,
    },
  ]);
  let addNewComments = (comment) => {
    setComments((currComment) => [...currComment, comment]);
    console.log("New comments added Successfully");
  };

  return (
    <>
      <div>
        <h3>All Comments</h3>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remark}</span>
            &nbsp;
            <span>(rating : {comment.rating})</span>
            <p>- {comment.username}</p>
          </div>
        ))}
      </div>
      <hr />
      <hr />
      <ComentsForm addNewComments={addNewComments} />
    </>
  );
}

import React, { useEffect, useState } from "react";
import Data from "../UserData";
import "./Comments.css";

const Comments = () => {
  function Comment({ comment }) {
    const nestedComments = (comment.replies || []).map((comment) => {
      return <Comment key={comment.id} comment={comment} type="child" />;
    });

    return (
      <div style={{ marginLeft: "25px", marginTop: "10px" }}>
        <h5 className="author">
          {comment.author + " " + comment.points + " " + "points"}
        </h5>
        <h4>{comment.body}</h4>
        <span>Reply</span>
        <span>Give award</span>
        <span>Share</span>
        <span>Save</span>
        {nestedComments}
      </div>
    );
  }
  return (
    <div>
      <h5 className="author">
        {Data.author + " " + Data.points + " " + "points"}
      </h5>
      <h4>{Data.body}</h4>
      <span>Reply</span>
      <span>Give award</span>
      <span>Share</span>
      <span>Save</span>
      {Data.replies.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default Comments;

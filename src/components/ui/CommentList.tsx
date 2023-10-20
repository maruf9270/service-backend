// components/CommentList.js
import React from "react";
import { Divider, List } from "antd";
import { Icomment } from "@/schemas/comment";

const CommentList = ({ comments }: { comments: Icomment }) => {
  return (
    <>
      {comments?.map((comment: Icomment) => (
        <>
          <div className="m-10 p-6 border border-stone-200 rounded-md ">
            <span className="text-2xl font-bold font-serif">
              {comment.userId.name.firstName}
            </span>

            <p className="text-sm">
              <span className="font-bold font-mono">Rating: </span>
              {comment.rating}
            </p>
            <p className="font-light">{comment.review}</p>
          </div>
        </>
      ))}
    </>
  );
};

export default CommentList;

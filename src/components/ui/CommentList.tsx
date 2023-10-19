// components/CommentList.js
import React from "react";
import { List } from "antd";

const CommentList = ({
  comments,
}: {
  comments: { username: string; comment: string; rating: number }[];
}) => {
  return (
    <List
      dataSource={comments}
      itemLayout="vertical"
      renderItem={(item: any) => (
        <List.Item>
          <div>
            <strong>{item.username}</strong>
            <p>{item.comment}</p>
            <div>Rating: {item.rating}</div>
          </div>
        </List.Item>
      )}
    />
  );
};

export default CommentList;

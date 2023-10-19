"use client";
import React, { useEffect, useState } from "react";
import { Input, Button, Rate, message } from "antd";
import CommentList from "./CommentList";
import Form from "../Form/Form";
import FormInputText from "../Form/textarea";
import {
  useGetReviewsQuery,
  usePostReviewMutation,
} from "@/redux/api/review/reviewSlict";
const { TextArea } = Input;

const CommentForm = ({ serviceId }: { serviceId: string }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const { data, isLoading } = useGetReviewsQuery(serviceId);
  const [postreview, { isSuccess, isError }] = usePostReviewMutation();
  console.log(data);
  useEffect(() => {
    if (isSuccess) {
      message.success("Review added successfully");
    }
    if (isError) {
      message.error("Error adding review");
    }
  }, [isSuccess, isError]);

  const handleSubmit = (data: any) => {
    const reviewData = {
      rating: rating,
      review: data.review,
      serviceId: serviceId,
    };
    postreview(reviewData);
    setRating(0);
  };

  return (
    <div>
      <div className="max-w-2xl">
        <h1 className="text-xl">Submit a Review</h1>
        <Form submitHandler={handleSubmit}>
          <div className="h-20">
            <FormInputText
              name="review"
              placeHolder="Write a descriptive review"
              size="large"
            ></FormInputText>
          </div>
          <div>
            <Rate allowHalf value={rating} onChange={handleRatingChange} />
            <Button type="primary" htmlType="submit" className="mx-3">
              Submit
            </Button>
          </div>
        </Form>
      </div>

      <CommentList comments={data?.data}></CommentList>
    </div>
  );
};

export default CommentForm;

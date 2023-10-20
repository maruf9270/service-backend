"use client";
import React, { useEffect, useState } from "react";
import { Input, Button, Rate, message, Divider } from "antd";
import CommentList from "./CommentList";
import Form from "../Form/Form";
import FormInputText from "../Form/textarea";
import {
  useGetReviewsQuery,
  usePostReviewMutation,
} from "@/redux/api/review/reviewSlict";
import { useAppSelector } from "@/hooks/redux";
const { TextArea } = Input;

const CommentForm = ({ serviceId }: { serviceId: string }) => {
  const user = useAppSelector((state) => state.user);
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const { data, isLoading } = useGetReviewsQuery(serviceId);

  const [postreview, { isSuccess, isError, error }] = usePostReviewMutation();

  useEffect(() => {
    if (isSuccess) {
      message.success("Review added successfully");
    }
    if (isError) {
      message.error("Review already exists");
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
      <div className="border border-stone-200 my-5 p-5 rounded-md shadow-lg">
        <div className="max-w-2xl">
          <h1 className="text-xl">Submit a Review</h1>
          {user?.user?._id ? (
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
          ) : (
            <span className="text-2xl ">Login To add Review</span>
          )}
        </div>
      </div>

      <div className="border border-stone-200 rounded-md shadow-lg">
        <Divider orientation="left">Reviews</Divider>
        <CommentList comments={data?.data}></CommentList>
      </div>
    </div>
  );
};

export default CommentForm;

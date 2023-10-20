"use client";
import { UserOutlined } from "@ant-design/icons";
import { Button, Divider, message } from "antd";
import Form from "@/components/Form/Form";
import FormInputs from "@/components/Form/FormInput";
import ImageUploader from "@/components/Image/ImageComponent";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "@/schemas/signUpSchema";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  useUpdateUserMutation,
  useUserLoginMutation,
} from "@/redux/api/auth/authSlice";
import { useEffect } from "react";

const Page = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [update, { isLoading, isError, isSuccess, data, error }] =
    useUpdateUserMutation();
  const submitHandler = (params: any) => {
    const imageData = params?.profileImage;
    const fromData = new FormData();
    fromData.append("image", imageData);
    console.log(params);

    if (params.profileImage !== user.user.profileImage) {
      fetch(
        "https://api.imgbb.com/1/upload?key=d700aa3754b0d575e642546c26e82c11",
        {
          method: "POST",
          body: fromData,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          params.profileImage = data.data.url;
          update({ id: user.user._id, data: params });
        })
        .catch((error) => {});
    } else {
      update({ id: user.user._id, data: params });
    }
  };
  useEffect(() => {
    if (isLoading) {
      message.loading("Registering");
    }
    if (isSuccess) {
      message.success("Admin added successfully");
    }
    if (isError) {
      message.error("Error");
      console.error(error);
    }
  }, [isError, isSuccess, isError]);
  return (
    <div>
      <div>
        <Form submitHandler={submitHandler} defaultValue={user.user}>
          <Divider orientation="left">
            <UserOutlined /> Personal Information
          </Divider>
          <div>
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
              <div className="w-full md:w-[30%]">
                <FormInputs
                  name="name.firstName"
                  label="First Name"
                  size="large"
                  defaultValue={user.user.name.firstName}
                ></FormInputs>
              </div>
              <div className="w-full md:w-[30%]">
                <FormInputs
                  name="name.middleName"
                  label="Middle Name"
                  size="large"
                ></FormInputs>
              </div>
              <div className="w-full md:w-[30%]">
                <FormInputs
                  name="name.lastName"
                  label="Last Name"
                  size="large"
                ></FormInputs>
              </div>
            </div>
            <div className="my-5">
              <ImageUploader name="profileImage"></ImageUploader>
            </div>
            <Divider orientation="left">Contant Informaing</Divider>
            <div>
              <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <div className="w-full md:w-[30%] flex-nowrap">
                  <FormInputs
                    name="email"
                    label="Email"
                    size="large"
                  ></FormInputs>
                </div>
                <div className="w-full md:w-[30%]">
                  <FormInputs
                    name="phone"
                    label="Phone Number"
                    size="large"
                  ></FormInputs>
                </div>
                <div className="w-full md:w-[30%]">
                  <FormInputs
                    name="address"
                    label="Address"
                    size="large"
                  ></FormInputs>
                </div>
              </div>
            </div>
            <div className="flex justify-start my-10">
              <Button type="primary" size="large" htmlType="submit">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Page;

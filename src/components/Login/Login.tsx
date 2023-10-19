"use client";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import LoginImage from "../../assets/Tablet login.gif";
import From from "../Form/Form";
import FormInputs from "../Form/FormInput";
import { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/schemas/loginsSchema";
import {
  useGetProfileQuery,
  useLoginMutation,
} from "@/redux/api/auth/authSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setuser } from "@/redux/features/auth/authSlice";

const Login = () => {
  const route = useRouter();
  const [login, { isError, isLoading, isSuccess, error, data }] =
    useLoginMutation();
  // const dispatch = useAppDispatch();
  // const { data: profile, isLoading: Ploading } = useGetProfileQuery(undefined);
  const SubmitHandler: SubmitHandler<FormData> = (data) => {
    login(data);
  };
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (isSuccess) {
      message.success("Login Success");
      localStorage.setItem("token", data.data.accessToken);
      localStorage.setItem("loggedIn", true as unknown as string);
    }
    if (isError) {
      message.error("Error");
    }
    if (user?.user?._id) {
      route.push("/");
    }
  }, [isError, isSuccess, data?.data, route, user]);
  return (
    <div>
      <Row justify={"center"} align={"middle"} style={{ minHeight: "100vh" }}>
        <Col className="gutter-row" xs={22} sm={22} md={11} lg={11} xl={11}>
          <Image src={LoginImage} height={500} alt="log"></Image>
        </Col>
        <Col className="gutter-row" xs={22} sm={22} md={10} lg={10} xl={10}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              border: "1px solid #f2efe8",
            }}
          >
            <From
              submitHandler={SubmitHandler}
              resolver={yupResolver(LoginSchema)}
            >
              <div>
                <FormInputs
                  name="email"
                  label="Email"
                  type="email"
                  size="large"
                ></FormInputs>
              </div>
              <div>
                <FormInputs
                  name="password"
                  label="Password"
                  type="password"
                  size="large"
                ></FormInputs>
              </div>
              <div>
                <Button type="primary" size="large" htmlType="submit">
                  Login
                </Button>
              </div>
            </From>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;

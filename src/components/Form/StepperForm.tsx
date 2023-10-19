"use client";
import React, { ReactElement, useState } from "react";
import { UserAddOutlined } from "@ant-design/icons";
import { Button, message, Steps, theme } from "antd";
import Form from "../Form/Form";
export type ISteps = {
  title: string;
  content: React.ReactNode;
  status?: string;
  icon: React.ReactNode;
};
export type IFromProps = {
  steps: ISteps[];
  hanlderFunction: (val1: any) => void;
};
const ReusableStepperForm = ({ FormProps }: { FormProps: IFromProps }) => {
  const { steps, hanlderFunction } = FormProps;
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    icon: item.icon,
  }));

  const formSubmit = (data: any) => {
    hanlderFunction(data);
    console.log(data);
  };

  return (
    <>
      <Form submitHandler={formSubmit}>
        <Steps current={current} items={items} />
        <div>{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
              htmlType="submit"
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </Form>
    </>
  );
};

export default ReusableStepperForm;

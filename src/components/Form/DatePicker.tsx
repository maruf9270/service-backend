"use client";
import React from "react";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";

import { useFormContext, Controller } from "react-hook-form";
import { Input } from "antd";
import dayjs, { Dayjs } from "dayjs";

interface IInput {
  name: string;
  size?: "large" | "small";
  label?: string;
  value?: Dayjs;
  onChange?: (dateString: string) => void;
}
const FormDateInputs = ({ name, label, onChange, size }: IInput) => {
  const { control, setValue } = useFormContext();
  const HandleonChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(dateString) : null;
    const aDate = dateString;
    setValue(name, dateString);
  };

  return (
    <>
      {label ? label : ""}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            value={dayjs(field.value)}
            onChange={HandleonChange}
            size={size}
            style={{ width: "100%" }}
          ></DatePicker>
        )}
      />
    </>
  );
};

export default FormDateInputs;

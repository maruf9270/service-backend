"use client";
import { useFormContext, Controller } from "react-hook-form";
import { Input, Select } from "antd";

interface IInput {
  type?: string;
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeHolder?: string;
  validate?: object;
  label?: string;
  disabled?: boolean;
  options: {
    value: string | boolean | number;
    label: string;
  }[];
}
const FormSelector = ({
  type,
  name,
  size,
  validate,
  value,
  id,
  placeHolder,
  label,
  options,
  disabled,
}: IInput) => {
  const { control, setValue } = useFormContext();
  const handleChange = (selected: string) => {
    console.log(selected);
  };
  return (
    <>
      {label ? label : null}

      <Controller
        control={control}
        disabled
        name={name}
        render={({ field }) => (
          <Select
            defaultValue="lucy"
            style={{ width: "100%" }}
            onChange={field.onChange}
            value={field.value}
            placeholder={placeHolder}
            options={options}
          />
        )}
      />
    </>
  );
};

export default FormSelector;

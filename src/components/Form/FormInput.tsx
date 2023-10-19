"use client";
import { useFormContext, Controller } from "react-hook-form";
import { Input, message } from "antd";
import { getErrorMessage } from "@/utils/schemaValidator";

interface IInput {
  type?: string;
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeHolder?: string;
  validate?: object;
  label?: string;
}
const FormInputs = ({
  type,
  name,
  size,
  validate,
  value,
  id,
  placeHolder,
  label,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage = getErrorMessage(errors, name);
  return (
    <>
      {label ? label : null}

      {type === "password" ? (
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Input.Password
              {...field}
              type={type}
              size={size}
              placeholder={placeHolder}
              value={value ? value : field.value}
              width={"100%"}
            />
          )}
        />
      ) : (
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Input
              {...field}
              type={type}
              size={size}
              placeholder={placeHolder}
              value={value ? value : field.value}
            />
          )}
        />
      )}
      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default FormInputs;

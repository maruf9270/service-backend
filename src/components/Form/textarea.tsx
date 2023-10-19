"use client";
import { useFormContext, Controller } from "react-hook-form";
import { Input, message } from "antd";
import { getErrorMessage } from "@/utils/schemaValidator";
import TextArea from "antd/es/input/TextArea";

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
const FormInputText = ({
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
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextArea
            {...field}
            size={size}
            placeholder={placeHolder}
            value={value ? value : field.value}
          />
        )}
      />

      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default FormInputText;

import React, { ReactElement, ReactNode } from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  SubmitHandler,
} from "react-hook-form";

// Types for from configuration
type FormConfig = {
  defaultValue?: Record<string, any>;
  resolver?: any;
};
type FromProp = {
  children: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & FormConfig;
export default function From({
  submitHandler,
  defaultValue,
  resolver,
  children,
}: FromProp) {
  const formConfig: FormConfig = {};

  if (!!defaultValue) {
    formConfig["defaultValue"] = defaultValue;
  }
  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);
  const { reset, handleSubmit } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

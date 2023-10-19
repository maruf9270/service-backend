"use client";
import { store } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";
import { ToastContainer } from "react-toastify";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </Provider>
  );
};

export default Providers;

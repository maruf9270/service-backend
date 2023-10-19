"use client";
import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Sidebar from "@/components/ui/Sidebar";

import Navber from "@/components/ui/Header";
import LayoutContent from "@/components/ui/Content";
import Providers from "@/lib/Provider";

const { Header, Sider, Content } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const Dashboards = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Layout hasSider style={{ minHeight: "100vh" }}>
        <Sidebar></Sidebar>
        <Layout className="site-layout ml-0 md:ml-[200px]">
          <LayoutContent>{children}</LayoutContent>
        </Layout>{" "}
      </Layout>
    </Layout>
  );
};

export default Dashboards;

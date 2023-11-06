"use client";
import { Breadcrumb, Layout, Menu, MenuProps, theme } from "antd";

import { use, useState } from "react";

import sidebarItems from "../constant/sidebarItems";
import { useAppSelector } from "@/hooks/redux";

const { Sider } = Layout;
const Sidebar = () => {
  const user = useAppSelector((state) => state.user);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  // @ts-ignore
  const sidebarprop: MenuProps["items"] = sidebarItems(user?.user?.role);
  return (
    <Sider
      width={200}
      style={{
        overflow: "auto",
        height: "100vh",
      }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={sidebarprop}
        theme="light"
      />
    </Sider>
  );
};

export default Sidebar;

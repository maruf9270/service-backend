import React from "react";
import { Layout, theme } from "antd";
import { Footer } from "antd/es/layout/layout";

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { Header, Content, Sider } = Layout;
  return (
    <>
      <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
        <div
          style={{ padding: 24, minHeight: 380, background: colorBgContainer }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </>
  );
};

export default LayoutContent;

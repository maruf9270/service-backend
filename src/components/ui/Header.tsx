"use client";
import { useState, useEffect } from "react";
import { Breadcrumb, Layout, Menu, Button, Popover } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

const Navber = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the window width to determine if it's a mobile device
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check initially
    window.addEventListener("resize", handleResize); // Add event listener

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const menuItems = [
    { key: "1", label: "Home" },
    { key: "2", label: "Services" },
    { key: "3", label: "Dashboard" },
    { key: "4", label: "Services" },
    { key: "5", label: "Dashboard" },
  ];
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  const buttonWidth = 70;
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        overflow: "visible",
        width: "100%",
      }}
    >
      <div style={{ width: "500px" }}>
        {/* Show the menu or button based on the screen size */}
        {isMobile ? (
          <Popover
            placement="bottomLeft"
            title={"efef"}
            content={content}
            trigger="click"
          >
            <Button>
              <UnorderedListOutlined />
            </Button>
          </Popover>
        ) : (
          <Menu theme="dark" mode="horizontal" items={menuItems} />
        )}
      </div>
      <div className="demo-logo" />
    </Header>
  );
};

export default Navber;

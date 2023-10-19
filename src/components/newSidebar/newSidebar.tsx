import { useState } from "react";
import { Menu, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./sidebar.css"; // Import Tailwind CSS

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <Button className="toggle-button" onClick={handleToggleSidebar}>
        <MenuOutlined />
      </Button>
      <Menu theme="dark" mode="vertical" inlineCollapsed={collapsed}>
        <Menu.Item key="1">Menu Item 1</Menu.Item>
        <Menu.Item key="2">Menu Item 2</Menu.Item>
        {/* Add more menu items as needed */}
      </Menu>
    </div>
  );
};

export default Sidebar;

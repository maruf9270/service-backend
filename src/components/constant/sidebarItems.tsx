import type { MenuProps } from "antd";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";
import Link from "next/link";
const sidebarItems = (role: string) => {
  const defaultMenuItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined></UserOutlined>,
      children: [
        {
          label: "Change Password",
          key: "cng-pass",
        },
      ],
    },
    {
      label: <Link href={"/add-admin"}>Add Admin</Link>,
      key: "Add Admin",
      icon: <TeamOutlined />,
    },
    ,
    {
      label: <Link href={"/add-category"}>Add category</Link>,
      key: "Add category",
      icon: <TeamOutlined />,
    },
    ,
    {
      label: <Link href={"/add-service"}>Add Service</Link>,
      key: "add sercice",
      icon: <TeamOutlined />,
    },
    {
      label: <Link href={"/admins"}>Admins</Link>,
      key: "Admins",
      icon: <TeamOutlined />,
    },
    {
      label: <Link href={"/users"}>Users</Link>,
      key: "usrs",
      icon: <TeamOutlined />,
    },
    {
      label: <Link href={"/bookings"}>Bookings</Link>,
      key: "students",
      icon: <TeamOutlined />,
    },
  ];
  return defaultMenuItems;
};

export default sidebarItems;

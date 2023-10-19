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
      label: "Admin",
      key: "admin",
      icon: <TeamOutlined />,
      children: [
        {
          label: <Link href={"/super_admin/create_admin"}>Create Admin</Link>,
          key: "new_admin",
        },
      ],
    },
    {
      label: "Students",
      key: "students",
      icon: <TeamOutlined />,
      children: [
        {
          label: <Link href={"/student/create_student"}>Create Student</Link>,
          key: "new_student",
        },
      ],
    },
  ];
  return defaultMenuItems;
};

export default sidebarItems;

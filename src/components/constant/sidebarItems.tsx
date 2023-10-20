import type { MenuProps } from "antd";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";
import Link from "next/link";
const sidebarItems = (role: string) => {
  if (role == "super_admin") {
    const defaultMenuItems = [
      {
        label: "Profile",
        key: "profile",
        icon: <UserOutlined></UserOutlined>,
        children: [
          {
            label: <Link href={"/profile"}>Profile</Link>,
            key: "Pofile",
          },
          {
            label: <Link href={"/update-profile"}>Update Profile</Link>,
            key: "UpdatePofile",
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
      {
        label: <Link href={"/d-services"}>Services</Link>,
        key: "stuts",
        icon: <TeamOutlined />,
      },
      {
        label: <Link href={"/create-faq"}>Create faq</Link>,
        key: "faq",
        icon: <TeamOutlined />,
      },
      {
        label: <Link href={"/create-blog"}>Add Blog</Link>,
        key: "blog",
        icon: <TeamOutlined />,
      },
    ];
    return defaultMenuItems;
  }
  if (role == "admin") {
    const defaultMenuItems = [
      {
        label: "Profile",
        key: "profile",
        icon: <UserOutlined></UserOutlined>,
        children: [
          {
            label: <Link href={"/profile"}>Profile</Link>,
            key: "Pofile",
          },
          {
            label: <Link href={"/update-profile"}>Update Profile</Link>,
            key: "UpdatePofile",
          },
        ],
      },
      {
        label: <Link href={"/create-faq"}>Create faq</Link>,
        key: "faq",
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
        label: <Link href={"/users"}>Users</Link>,
        key: "usrs",
        icon: <TeamOutlined />,
      },
      {
        label: <Link href={"/bookings"}>Bookings</Link>,
        key: "students",
        icon: <TeamOutlined />,
      },
      {
        label: <Link href={"/d-services"}>Services</Link>,
        key: "students",
        icon: <TeamOutlined />,
      },
      {
        label: <Link href={"/create-blog"}>Add Blog</Link>,
        key: "blog",
        icon: <TeamOutlined />,
      },
    ];
    return defaultMenuItems;
  } else {
    const defaultMenuItems = [
      {
        label: "Profile",
        key: "profile",
        icon: <UserOutlined></UserOutlined>,
        children: [
          {
            label: <Link href={"/profile"}>Profile</Link>,
            key: "Pofile",
          },
          {
            label: <Link href={"/update-profile"}>Update Profile</Link>,
            key: "UpdatePofile",
          },
        ],
      },

      {
        label: <Link href={"/bookings"}>Bookings</Link>,
        key: "students",
        icon: <TeamOutlined />,
      },
    ];
    return defaultMenuItems;
  }
};

export default sidebarItems;

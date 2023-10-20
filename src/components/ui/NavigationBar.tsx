import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useGetProfileQuery } from "@/redux/api/auth/authSlice";
import {
  handleLogouts,
  setLoadin,
  setuser,
} from "@/redux/features/auth/authSlice";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavigationBar = () => {
  const { isLoading, isSuccess, isError, data } = useGetProfileQuery(undefined);
  const dispatch = useAppDispatch();
  const [logout, setLogout] = useState(false);
  useEffect(() => {
    if (isSuccess) {
      dispatch(setuser(data.data));
      dispatch(setLoadin({ loading: false }));
    }
    if (isLoading) {
      dispatch(setLoadin({ loading: true }));
    }
    if (isError) {
      dispatch(setLoadin({ loading: false }));
    }
  }, [isSuccess, data, dispatch, isError]);

  const handleLogout = () => {
    dispatch(handleLogouts());
    localStorage.removeItem("token");
    localStorage.removeItem("loggedIn");

    setLogout(!logout);
  };
  const user = useAppSelector((state) => state.user);

  return (
    <div className="navbar sticky top-0 bg-base-100 max-w-[100vw] z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/profile"}>Dashboard</Link>
            </li>

            <li>
              <Link href={"/services"}>Services</Link>
            </li>

            <li>
              <Link href={"/blog"}>blog</Link>
            </li>
            <li>
              <Link href={"/faq"}>Faq</Link>
            </li>
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          Pc Sollution
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {user.user._id ? (
            <li>
              <Link href={"/profile"}>Dashboard</Link>
            </li>
          ) : (
            ""
          )}

          <li>
            <Link href={"/services"}>Services</Link>
          </li>

          <li>
            <Link href={"/blog"}>blog</Link>
          </li>
          <li>
            <Link href={"/faq"}>Faq</Link>
          </li>
          <li>
            <Link href={"/about"}>About Us</Link>
          </li>
        </ul>
      </div>
      <div className="flex-none gap-2 navbar-end">
        {/*  */}
        <div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bt */}
        {user?.user?._id ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src={user?.user?.profileImage}
                  width={100}
                  height={100}
                  alt="Profile picture"
                ></Image>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              {" "}
              <li>
                <div className="flex align-middle justify-center text-xl font-bold">
                  <h3>
                    {user?.user?.name?.firstName} {user?.user?.name?.middleName}{" "}
                    {user?.user?.name?.lastName}
                  </h3>
                </div>
              </li>
              <li>
                <Link href={"/profile"} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Button
                  onClick={() => handleLogout()}
                  type="primary"
                  size="large"
                >
                  Logout
                </Button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <div style={{ marginRight: "5 px", display: "inline-block" }}>
              <Button type="primary" size="middle">
                <Link href={"/login"}>Login</Link>
              </Button>
            </div>
            <Button type="primary" size="middle">
              <Link href={"/sign_up"}>Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;

import { useDeleteUserMutation } from "@/redux/api/auth/authSlice";
import { IAuth } from "@/schemas/comment";
import { message } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const UserTable = ({ data }: { data: any }) => {
  const [Delete, { isError, isLoading, isSuccess }] = useDeleteUserMutation();
  const handleDelete = (data: string) => {
    Delete(data);
  };
  useEffect(() => {
    if (isSuccess) {
      message.success("User Deleted Successfully");
    }
    if (isError) {
      message.error("User Deleted Error");
    }
    if (isLoading) {
      message.loading("User Deleted Loading");
    }
  }, [isError, isLoading, isSuccess]);
  console.log(data);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data.map((user: IAuth) => (
            <tr key={user._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src={user.profileImage as unknown as string}
                        height={50}
                        width={50}
                        alt="si"
                      ></Image>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      {user.name.firstName} {user.name.middleName}{" "}
                      {user.name.lastName}
                    </div>
                    <div className="text-sm opacity-50">{user.address}</div>
                  </div>
                </div>
              </td>
              <td>
                {user.email}
                <br />
                <span className="badge badge-ghost badge-sm">{user.phone}</span>
              </td>
              <td>{user.role}</td>
              <th>
                <button
                  className="btn btn-warning text-white btn-xs"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
                <Link
                  href={`/edit-admin/${user?._id}`}
                  className="btn btn-primary text-white btn-xs mx-2"
                >
                  Edit
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default UserTable;

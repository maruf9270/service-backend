"use client";

import {
  useDeleteServiceMutation,
  useGetServicesQuery,
} from "@/redux/api/service/serviceSlice";
import { message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Page = () => {
  const [deletes, { isSuccess, isError }] = useDeleteServiceMutation();
  const handleClick = (data: string) => {
    deletes(data);
  };

  const { data, isLoading }: any = useGetServicesQuery(undefined);
  useEffect(() => {
    if (isSuccess) {
      message.success("Service deleted successfully!");
    }
    if (isError) {
      message.error("Something went wrong!");
    }
  }, [isError, isSuccess, data]);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.data?.data.map((s: any) => (
              <tr key={s._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          src={s.image}
                          height={50}
                          width={50}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{s.title}</div>
                      <div className="text-sm opacity-50">{s.category}</div>
                    </div>
                  </div>
                </td>

                <th>
                  <Link
                    href={`/edit-service/${s?._id}`}
                    className="btn btn-primary btn-xs"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-xs mx-3"
                    onClick={() => handleClick(s?._id)}
                  >
                    Delet
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Page;

import { useAppSelector } from "@/hooks/redux";
import { usePatchBookMutation } from "@/redux/api/appointment/apointmentSlice";
import { message } from "antd";
import Image from "next/image";
import React, { useEffect } from "react";

const TableRe = ({ data }: { data: any }) => {
  console.log(data);
  const user = useAppSelector((state) => state.user);

  const [patch, { isError, isSuccess }] = usePatchBookMutation();
  const handleCLientAction = (data: string) => {
    patch({
      id: data,
      status: "cancelled",
    });
  };
  //   onChange
  const change = (e: any, id: string) => {
    patch({
      id: id,
      status: e.target.value,
    });
  };
  useEffect(() => {
    if (isSuccess) {
      message.success("Booking cantelled successfully");
    }
    if (isError) {
      message.error("Error");
    }
  }, [isError, isSuccess]);
  return (
    <div>
      <div className="text-center text-2xl ">User Appointments</div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Date and Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((o: any) => (
              <tr key={o._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          src={o?.serviceId?.image}
                          height={50}
                          width={50}
                          alt="feji"
                        ></Image>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{o?.serviceId?.title}</div>
                      <div className="text-sm opacity-50">
                        {o?.serviceId?.price}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {o.date}
                  <br />
                  <span className="badge badge-ghost badge-sm">{o?.slot}</span>
                </td>
                <td>{o.status}</td>
                {user?.user?.role == "user" ? (
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleCLientAction(o._id)}
                    >
                      Cancel Appointment
                    </button>
                  </th>
                ) : (
                  ""
                )}
                {user?.user?.role == "admin" ||
                user?.user?.role == "super_admin" ? (
                  <th>
                    <div className="form-control max-w-xs">
                      <select
                        className="select"
                        onChange={(e) => change(e, o._id)}
                      >
                        <option disabled selected>
                          Select Action
                        </option>
                        <option value={"accepted"}>Accept</option>
                        <option value={"rejected"}>Reject</option>
                      </select>
                    </div>
                  </th>
                ) : (
                  ""
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableRe;

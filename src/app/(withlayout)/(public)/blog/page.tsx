"use client";

import { useGetblogsQuery } from "@/redux/api/faq/faqslice";
import { Spin } from "antd";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const { data, isLoading, isError } = useGetblogsQuery(undefined);
  if (isLoading) {
    return (
      <div className="min-h-[100vh] flex justify-center items-center">
        <Spin size="large">
          <div className="content" />
        </Spin>
      </div>
    );
  }
  return (
    <div className="max-w-screen-2xl mx-auto flex justify-around items-center min-h-screen">
      {data.data.map((blog: any) => (
        <div className="card w-96 bg-base-100 shadow-xl" key={blog._id}>
          <figure>
            <Image
              src={blog.image}
              height={200}
              width={200}
              alt="fiojeij"
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{blog.title}</h2>
            <p>{blog.description.slice(0, 100)}...</p>
            <div className="card-actions justify-end">
              <Link href={`/blog-id/${blog._id}`}>
                <button className="btn btn-primary">Read Full</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;

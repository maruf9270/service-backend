import CommentForm from "@/components/ui/Comment";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row p-5 justify-center ">
        <div className=" md:w-[60%] w-[100%]  flex justify-center ">
          <Image
            src={data?.data?.image}
            width={600}
            height={300}
            alt="Des"
            className="rounded-md"
          ></Image>
        </div>
        <div className=" md:w-[40%] w-[100%] ">
          <div>
            <h2 className="text-4xl font-bold font-serif">
              {data?.data?.title}
            </h2>
          </div>
          <div>
            <p>
              <span className="text-xl font-mono font-bold">Price:</span>{" "}
              {data?.data?.price}
            </p>
            <div>
              <Button
                type="primary"
                className="w-full my-3"
                disabled={data.available === false ? true : false}
              >
                Add to Cart
              </Button>
              <Link href={`/book-apointment/${params.id}`}>
                <Button
                  type="primary"
                  className="w-full"
                  disabled={data.available === false ? true : false}
                >
                  Book an Apointment
                </Button>
              </Link>
            </div>
            <span className="text-xl font-bold">Description:</span> <br />
            <p className="font-mono">{data?.data?.description}</p>
          </div>
        </div>
      </div>
      <div>
        <hr className="" />
      </div>
      <div>
        <CommentForm serviceId={data?.data?._id}></CommentForm>
      </div>
    </div>
  );
};

export default page;

async function getData(id: string) {
  const res = await fetch(
    `https://tutoring-service-backend.vercel.app/api/v1/services/${id}`,
    {
      next: {
        tags: ["single-service"],
      },
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

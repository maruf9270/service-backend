import CommentForm from "@/components/ui/Comment";
import Image from "next/image";

const page = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row p-5 justify-center ">
        <div className=" md:w-[60%] w-[100%]  flex justify-center ">
          <Image
            src={data?.data?.image}
            width={500}
            height={300}
            alt="Des"
            className="rounded-md"
          ></Image>
        </div>
        <div className=" md:w-[40%] w-[100%] ">
          <div>
            <h2>{data?.data?.title}</h2>
          </div>
          <div>
            <p>Price: {data?.data?.price}</p>

            <p>{data?.data?.description}</p>
          </div>
        </div>
      </div>
      <div>
        <h1>Description</h1>
        <p>{data?.data?.description}</p>
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

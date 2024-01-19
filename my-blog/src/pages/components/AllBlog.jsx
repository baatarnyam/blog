import { useState } from "react";
import BlogCards from "./BlogCards";

const AllBlog = () => {
  const [active, setActive] = useState("");

  const blogName = [
    "All",
    "Design",
    "Travel",
    "Fasion",
    "Technology",
    "Branding",
  ];

  return (
    <div className="md:w-[1220px]  flex flex-col gap-[32px] w-[380px h-fit">
      <div className="workSansText w-[184px] h-[28px] text-[24px] font-bold text-gray-950">
        All Blog Post
      </div>
      <div className="md:w-full md:h-[25px] md:flex justify-between hidden">
        <button className="workSansText md:w-[360px] md:h-full flex gap-[20px] font-bold text-[14px]">
          {" "}
          {blogName.map((items, index) => (
            <div
              id={index}
              className={`${active === items ? "text-amber-600" : ""}`}
              key={index}
              onClick={() => setActive(items)}
            >
              {items}
            </div>
          ))}
        </button>
        <button className="font-bold text-[14px]">View All</button>
      </div>
      <BlogCards />
    </div>
  );
};
export default AllBlog;

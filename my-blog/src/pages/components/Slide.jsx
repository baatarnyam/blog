import Image from "next/image";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";
import { axios } from "axios";

const Slide = () => {
  const { data, error } = useSWR("https://dev.to/api/articles", (arg) =>
    fetch(arg).then((res) => res.json())
  );

  const [count, setCount] = useState(0);

  const nextSlide = () => {
    setCount(count + 1);
  };
  const previousSlide = () => {
    setCount(count - 1);
  };

  return (
    <div className="md:w-[1216px] md:h-[651px] md:flex flex-col justify-between items-end relative hidden">
      {!data ? (
        <div>Loading</div>
      ) : (
        <>
          <div className="md:w-full md:h-[600px]">
            <Image
              src={`${data[count].social_image}`}
              width={1216}
              height={600}
              className="rounded-[12px]"
              alt=""
            />
          </div>
          <div className="flex gap-1">
            <button
              disabled={count === 0}
              onClick={() => {
                previousSlide();
              }}
              className="w-[40px] h-[40px] rounded-[6px] flex items-center justify-center text-gray-600 border border-gray-950 active:scale-105"
            >
              {"<"}
            </button>
            <button
              disabled={count === data.lenght - 1}
              onClick={() => {
                nextSlide();
              }}
              className="w-[40px] h-[40px] rounded-[6px] flex items-center justify-center text-gray-600 border border-gray-950 active:scale-105"
            >
              {">"}
            </button>
          </div>
          <div className="md:w-[598px] md:h-[252px] absolute left-2 bottom-[60px] rounded-[12px] p-[40px] flex flex-col justify-between bg-white border">
            <button className="workSansText  w-[97px] h-[28px] rounded-[6px] flex items-center justify-center bg-blue-500 text-white text-[14px] font-medium">
              {`${data[count].tag_list[3]}`}
            </button>
            <div className="workSansText w-[518px] h-[80px] text-4xl font-semibold text-gray-950 overflow-hidden">
              {`${data[count].description}`}
            </div>
            <div className="workSansText w-[126px] h-[24px] text-base font-normal text-gray-400">
              {`${data[count].published_at.slice(0, 10)}`}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Slide;

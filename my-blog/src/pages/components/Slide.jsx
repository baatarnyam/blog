import Image from "next/image";
import useSWR from "swr";
import { useState } from "react";

const Slide = () => {
  const { data, error } = useSWR("https://media.dev.to/api/articles", (arg) =>
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
        <div
          role="status"
          className="mr-[45%] w-[140px] h-[30px] flex items-center justify-center"
        >
          <svg
            aria-hidden="true"
            class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>

          <span class="sr">Loading...</span>
        </div>
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

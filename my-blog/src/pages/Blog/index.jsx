import Image from "next/image";
import useSWR from "swr";

const BlogCards = () => {
  const { data, error } = useSWR("https://dev.to/api/articles", (args) =>
    fetch(args).then((res) => res.json())
  );
  console.log(data);
  return (
    <div className="md:w-[1220px] md:h-fit flex flex-wrap gap-[20px] justify-center">
      {data?.slice(0, 9).map((el, index) => (
        <div
          key={index}
          className="w-[380px] h-[476px] border rounded-[12px] p-[16px]"
        >
          <div>
            {" "}
            <Image
              src={el.social_image}
              width={360}
              height={240}
              className="rounded-[12px] md:w-[360px] md:h-[240px]"
              alt=""
            />
          </div>
          <div className="w-[360px] h-[200px] p-[8px] flex flex-col justify-between">
            <div className="min-w-[97px] w-fit h-[28px] rounded-[6px] flex items-center justify-center text-white text-[14px] font-medium bg-blue-500 p-[8px]">
              {el.tag_list.slice(3)}
            </div>
            <div className="w-[344px] h-[104px] text-[24px] font-semibold text-black overflow-hidden">
              {el.description}
            </div>
            <div className="w-[120px] h-[24px] text-base font-normal text-gray-400 overflow-hidden">
              {el.published_at.slice(0, 10)}
            </div>
          </div>
        </div>
      ))}
      <button className="w-[123px] h-[48px] rounded-[6px] flex items-center justify-center border md:mt-[40px]">
        Load More
      </button>
    </div>
  );
};
export default BlogCards;

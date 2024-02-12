import Image from "next/image";
import useSWR from "swr";

const Trending = () => {
  const { data, error } = useSWR("https://media.dev.to/api/articles", (args) =>
    fetch(args).then((res) => res.json())
  );
  console.log(data);
  return (
    <div className="md:w-[1220px] md:h-[380px] flex flex-col relative w-[390px] h-fit gap-[40px]">
      <div className="workSansText w-[184px] h-[28px] text-[24px] md:flex md:items-start font-bold">
        Trending
      </div>
      <div className="md:w-full md:h-[320px] md:flex-row md:justify-between w-full h-fit md:gap-[20px] flex flex-col gap-[30px]">
        {data?.slice(0, 4).map((el, index) => (
          <div key={index} className="flex justify-center">
            <div className="w-[290px] h-[320px]">
              <div className="w-[250px] h-[140px] flex flex-col justify-between absolute top-[240px] ml-[20px] bg-black/50 rounded-[6px] overflow-hidden p-[10px]">
                <div className="workSansText w-[97px] h-[28px] rounded-[6px] flex items-center justify-center bg-blue-500 text-white text-[14px] font-medium">
                  {el.tag_list.slice(3)}
                </div>
                <div className="workSansText w-[230px] h-[76px] text-lg text-white">
                  {el.description}
                </div>
              </div>
              <div>
                <Image
                  src={el.social_image}
                  width={290}
                  height={320}
                  className="rounded-[12px] w-[290px] h-[320px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Trending;

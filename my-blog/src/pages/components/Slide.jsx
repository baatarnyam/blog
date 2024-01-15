import Image from "next/image";

const Slide = () => {
  return (
    <div className="md:w-[1216px] md:h-[651px] md:flex flex-col justify-between items-end relative hidden">
      <div className="md:w-full md:h-[600px]">
        <Image src="/slide.png" width={1216} height={600} />
      </div>
      <div className="flex gap-1">
        <button className="w-[40px] h-[40px] rounded-[6px] flex items-center justify-center text-gray-600 border border-gray-950">
          {"<"}
        </button>
        <button className="w-[40px] h-[40px] rounded-[6px] flex items-center justify-center text-gray-600 border border-gray-950">
          {">"}
        </button>
      </div>
      <div className="md:w-[598px] md:h-[252px] absolute left-2 bottom-[60px] rounded-[12px] p-[40px] flex flex-col justify-between bg-white border">
        <button className="w-[97px] h-[28px] rounded-[6px] flex items-center justify-center bg-blue-500 text-white text-[14px] font-medium">
          Technolgy
        </button>
        <div className="w-[518px] h-[80px] text-4xl font-semibold text-gray-950">
          Grid system for better Design User Interface
        </div>
        <div className="w-[126px] h-[24px] text-base font-normal text-gray-400">
          August 20, 2022
        </div>
      </div>
    </div>
  );
};
export default Slide;

import Image from "next/image";

const Trending = () => {
  const array = [
    {
      img: (
        <Image
          src="/tranding1.png"
          width={289}
          height={320}
          className="rounded-[12px] w-full h-full"
        />
      ),
      title: "Technolgy",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      img: (
        <Image
          src="/tranding2.png"
          width={289}
          height={320}
          className="rounded-[12px] w-full h-full"
        />
      ),
      title: "Technolgy",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      img: (
        <Image
          src="/tranding3.png"
          width={289}
          height={320}
          className="rounded-[12px] w-full h-full"
        />
      ),
      title: "Technolgy",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      img: (
        <Image
          src="/tranding4.png"
          width={289}
          height={320}
          className="rounded-[12px] w-full h-full"
        />
      ),
      title: "Technolgy",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
  ];
  return (
    <div className="md:w-[1220px] md:h-[380px] flex flex-col justify-between border relative">
      <div className="w-[184px] h-[28px] text-[24px] font-bold">Tranding</div>
      <div className="w-full h-[320px] flex justify-between">
        {array.map(({ img, title, text }, index) => (
          <div>
            <div className="w-[290px] h-[320px]">{img}</div>
            <div className="w-[230px] h-[120px] flex flex-col justify-between absolute left-[30px] bottom-[30px]">
              <div className="w-[97px] h-[28px] rounded-[6px] flex items-center justify-center bg-blue-500 text-white text-[14px] font-medium">
                {title}
              </div>
              <div className="w-[230px] h-[76px] text-lg text-gray-100">
                {text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Trending;

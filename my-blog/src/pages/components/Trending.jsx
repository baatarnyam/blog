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
      title: "Technology",
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
      title: "Technology",
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
      title: "Technology",
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
      title: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
  ];
  return (
    <div className="md:w-[1220px] md:h-[380px] flex flex-col relative w-[390px] h-fit gap-[40px]">
      <div className="workSansText w-[184px] h-[28px] text-[24px] md:flex md:items-start font-bold">
        Trending
      </div>
      <div className="md:w-full md:h-[320px] md:flex md:justify-between w-full h-fit gap-[20px]">
        {array.map(({ img, title, text }, index) => (
          <div>
            <div className="md:w-[290px] md:h-[320px] w-[350px] h-[250px]">
              <div className="w-[230px] h-[120px] flex flex-col justify-between absolute md:top-[220px] md:ml-[40px]  ml-[40px]">
                <div className="workSansText w-[97px] h-[28px] rounded-[6px] flex items-center justify-center bg-blue-500 text-white text-[14px] font-medium">
                  {title}
                </div>
                <div className="workSansText w-[230px] h-[76px] text-lg text-gray-100">
                  {text}
                </div>
              </div>
              {img}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Trending;

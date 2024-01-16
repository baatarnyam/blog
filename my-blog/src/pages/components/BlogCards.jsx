import Image from "next/image";

const BlogCards = () => {
  const cards = [
    {
      img: (
        <Image
          src="/blog1.png"
          width={360}
          height={240}
          className="rounded-[12px] "
        />
      ),
      title: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      img: (
        <Image
          src="/blog1.png"
          width={360}
          height={240}
          className="rounded-[12px] "
        />
      ),
      title: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      img: (
        <Image
          src="/blog1.png"
          width={360}
          height={240}
          className="rounded-[12px] "
        />
      ),
      title: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      img: (
        <Image
          src="/blog1.png"
          width={360}
          height={240}
          className="rounded-[12px] "
        />
      ),
      title: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      img: (
        <Image
          src="/blog1.png"
          width={360}
          height={240}
          className="rounded-[12px] "
        />
      ),
      title: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      img: (
        <Image
          src="/blog1.png"
          width={360}
          height={240}
          className="rounded-[12px] "
        />
      ),
      title: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      img: (
        <Image
          src="/blog1.png"
          width={360}
          height={240}
          className="rounded-[12px] "
        />
      ),
      title: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      img: (
        <Image
          src="/blog1.png"
          width={360}
          height={240}
          className="rounded-[12px] "
        />
      ),
      title: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      img: (
        <Image
          src="/blog1.png"
          width={360}
          height={240}
          className="rounded-[12px] "
        />
      ),
      title: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
  ];
  return (
    <div className="md:w-[1220px] md:h-fit flex flex-wrap gap-[20px]">
      {cards.map(({ img, title, text, date }, index) => (
        <div className="w-[380px] h-[476px] border rounded-[12px] p-[16px]">
          <div>{img}</div>
          <div className="w-[360px] h-[200px] p-[8px] flex flex-col justify-between">
            <div className="w-[97px] h-[28px] rounded-[6px] flex items-center justify-center text-sky-700 text-[14px] font-medium bg-sky-50">
              {title}
            </div>
            <div className="w-[344px] h-[104px] text-[24px] font-semibold text-black">
              {text}
            </div>
            <div className="w-[126px] h-[24px] text-base font-normal text-gray-400 ">
              {date}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BlogCards;

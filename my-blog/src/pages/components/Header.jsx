import Image from "next/image";
import Search from "./Search";
import MenuClicked from "./Menu";

const Header = () => {
  const headerArray = ["Home", "Blog", "Contact"];
  return (
    <div className="md:w-full md:h-[100px] md:flex md:justify-center w-[390px] h-[72px] flex items-center justify-between">
      <div className="md:w-[1130px] md:h-[36px] md:flex md:gap-[118px]">
        <div>
          <Image
            src="/headerLogo.png"
            width={135}
            height={26}
            className="md:w-[158px] md:h-[36px]"
          />
        </div>
        <div className="md:w-[854px] md:h-[36] md:flex gap-[21px] hidden ">
          <div className="md:w-[667px] md:h-[36px] md:flex md:gap-[40px] md:justify-center md:items-center">
            {headerArray.map((items, index) => (
              <a
                src=""
                key={index}
                className="text-base font-normal text-gray-800"
              >
                {items}
              </a>
              //   <div className="text-base font-normal text-gray-800">{item}</div>
            ))}
          </div>
          <Search />
        </div>
      </div>
      <MenuClicked />
    </div>
  );
};
export default Header;

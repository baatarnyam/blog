import Image from "next/image";
import Search from "./Search";
import MenuClicked from "./Menu";
import Link from "next/link";

const Header = ({ children }) => {
  const headerArray = ["Home", "Blog", "Contact"];
  return (
    <div className="border flex flex-col items-center">
      <div className="md:w-full md:h-[100px] md:flex md:justify-center w-[390px] h-[72px] flex items-center justify-between">
        <div className="md:w-[1130px] md:h-[36px] md:flex md:gap-[118px]">
          <div>
            <Image
              src="/headerLogo.png"
              width={135}
              height={26}
              className="md:w-[158px] md:h-[36px]"
              alt=""
            />
          </div>
          <div className="md:w-[854px] md:h-[36] md:flex gap-[21px] hidden ">
            <div className="md:w-[667px] md:h-[36px] md:flex md:gap-[40px] md:justify-center md:items-center">
              {headerArray.map((items, index) => (
                <Link
                  href={`/${items === "Home" ? "/" : items}`}
                  key={index}
                  className="workSansText text-base font-normal text-gray-800"
                >
                  {items}
                </Link>
                //   <div className="text-base font-normal text-gray-800">{item}</div>
              ))}
            </div>
            <Search />
          </div>
        </div>
        <MenuClicked />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default Header;

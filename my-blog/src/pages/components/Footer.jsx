import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const headerArray = ["Home", "Blog", "Contact"];
  return (
    <div className="md:w-[1600px] md:h-[495px] bg-gray-100 flex flex-col gap-[30px] md:pt-[64px] items-center w-[390px] h-[220px] md:py-[30px] md:mt-[60px]">
      <div className="md:w-[1220px] md:h-[236px] md:flex md:gap-[20px]">
        <div className="md:w-[290px] md:h-full md:flex md:flex-col md:gap-[20px] hidden flex-col">
          <div className="jakartaText text-[18px] font-semibold text-gray-950">
            About
          </div>
          <div className="jakartaText md:w-[280px] md:h-[120px]text-base font-normal text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
          <div>
            <div className="flex gap-[5px]">
              <div className="jakartaText text-black font-semibold">Email:</div>
              <div>info@jstemplate.net</div>
            </div>
            <div className="flex gap-[5px]">
              <div className="jakartaText text-black font-semibold">Phone:</div>
              <div>880 123 456 789</div>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-row md:items-start gap-[20px] flex flex-col items-center justify-between">
          <div className="md:w-[520px] md:h-[88px] md:flex md:justify-center">
            <div className="md:w-[63px] md:h-full flex flex-col gap-[8px]">
              {headerArray.map((items, index) => (
                <Link
                  href={`/${items === "Home" ? "/" : items}`}
                  key={index}
                  className="workSansText text-base font-normal text-gray-800 active:scale-105"
                >
                  {items}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-[144px] h-[16px] flex justify-between ">
            <FaFacebook size={20} className="text-gray-600" />
            <FaTwitter size={20} className="text-gray-600" />
            <FaInstagram size={20} className="text-gray-600" />
            <FaLinkedin size={20} className="text-gray-600" />
          </div>
        </div>
      </div>
      <div className="md:w-[1220px] md:h-[95px] flex items-center gap-[64px]">
        <div className="w-[230px] h-[54px] flex justify-between">
          <div>
            <Image src="/footerLogo.png" width={48} height={48} alt="" />
          </div>
          <div className="md:w-[165px] md:h-[54px] flex flex-col justify-between ">
            <div>
              <Image src="/MetaBlog.png" width={94} height={28} alt="" />
            </div>
            <p className="jakartaText text-base md:w-[165px] md:h-[24px] text-gray-600">
              © All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="md:w-[929px] md:h-[24px] md:flex md:justify-end md:gap-[16px] hidden">
          <div className="border-r-[2px] pr-[15px] text-base font-normal text-gray-600">
            Terms of Use
          </div>
          <div className="border-r-[2px] pr-[15px] text-base font-normal text-gray-600">
            Privacy Policy
          </div>
          <div className="text-base font-normal text-gray-600">
            Cookie Policy
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

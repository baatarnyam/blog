import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="md:w-[895px] md:h-[895px] flex flex-col items-center md:mt-[50px] w-[390px] h-fit mb-[30px] gap-[20px]">
        <div className="md:w-[769px] md:h-[389px] flex flex-col items-center justify-center gap-[60px] w-[380px] h-fit">
          <div className="md:w-[624px] md:h-[163px] flex flex-col justify-between w-[320px] h-fit gap-[15px] ">
            <div className="md:w-[196px] md:h-[40px] flex items-end md:text-[36px] font-semibold text-black text-[26px] ">
              Contact Us
            </div>
            <div className="md:w-[610px] md:h-[103px] text-base font-normal text-gray-400 w-full h-[150px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </div>
          <div className="md:w-[638px] md:h-[153px] flex justify-between items-center w-[350px] h-fit ">
            <div className="md:w-[294px] md:h-[133px] flex flex-col gap-[10px] p-[16px] rounded-[12px] bg-gray-50 w-[170px]">
              <div className="md:text-[24px] text-black font-semibold text-[18px]">
                Address
              </div>
              <div className="md:text-lg text-gray-400 font-normal text-sm">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </div>
            </div>
            <div className="md:w-[294px] md:h-[133px] flex flex-col gap-[10px] p-[16px] rounded-[12px] bg-gray-50 w-[170px]">
              <div className="md:text-[24px] text-black font-semibold text-[18px]">
                Contact
              </div>
              <div className="md:text-lg text-gray-400 font-normal text-sm">
                313-332-8662 <br /> info@email.com
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[643px] md:h-[440px] rounded-[10px] bg-gray-100 md:py-[30px] md:pl-[30px] w-[360px] h-fit pt-[10px] pl-[10px] ">
          <div className="md:w-[478px] md:h-[385px] flex flex-col justify-between w-[360px] h-fit ">
            <div className="w-fit h-fit text-lg font-semibold">
              Leave a Message
            </div>
            <div className="md:w-[478px] md:h-[335px] flex flex-col justify-between w-[360px] h-[280px]">
              <div className="md:w-full md:h-[30px] md:flex md:flex-row md:justify-between md:-[360px] h-[71px] flex flex-col gap-[10px]">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-[225px] h-[25px] rounded-[5px] p-[14px]"
                ></input>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-[225px] h-[25px] rounded-[5px] p-[14px]"
                ></input>
              </div>
              <input
                className="md:w-full md:h-[25px] rounded-[5px] pl-[14px] w-[350px] h-[25px]"
                placeholder="Subject"
                type="text"
              ></input>
              <textarea
                placeholder="Write a message"
                className="pt-[20px] pl-[14px] md:w-full md:min-h-[134px] w-[350px] min-h-[80px] border"
              ></textarea>
              <button className="md:w-[130px] md:h-[40px] rounded-[6px] bg-blue-700 text-white md:text-[14px] font-normal flex items-center justify-center w-[100px] h-[30px] text-[12px]">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;

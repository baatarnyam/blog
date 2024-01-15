import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import Search from "./Search";
import { motion } from "framer-motion";

const MenuClicked = () => {
  const headerArray = ["Home", "Blog", "Contact"];
  const [menuClicked, setMenuClicked] = useState(false);
  const handleMenuClicked = () => {
    setMenuClicked((previousState) => !previousState);
  };
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
      exit={{ x: "150%", duration: 1 }}
      className=""
    >
      <button onClick={handleMenuClicked}>
        {menuClicked ? (
          <IoCloseCircleOutline size={32} />
        ) : (
          <FiMenu className="flex md:hidden" size={32} />
        )}
      </button>
      {menuClicked && (
        <div className="">
          <div className="w-[380px] h-300px flex flex-col items-center border">
            {headerArray.map((items, index) => (
              <a
                src=""
                key={index}
                className="flex flex-col text-base font-normal text-gray-800"
              >
                {items}
              </a>
              //   <div className="text-base font-normal text-gray-800">{item}</div>
            ))}
          </div>
          <Search />
        </div>
      )}
    </motion.div>
  );
};
export default MenuClicked;

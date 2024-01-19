import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import Search from "./Search";
import { motion } from "framer-motion";
import Link from "next/link";

const MenuClicked = () => {
  const headerArray = ["Home", "Blog", "Contact"];
  const [menuClicked, setMenuClicked] = useState(false);
  const handleMenuClicked = () => {
    setMenuClicked((previousState) => !previousState);
  };
  return (
    <div>
      <button onClick={handleMenuClicked}>
        {menuClicked ? (
          <IoCloseCircleOutline size={32} />
        ) : (
          <FiMenu className="flex md:hidden" size={32} />
        )}
      </button>
      {menuClicked && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-96%" }}
          exit={{ x: "150%", duration: 1 }}
          className="w-[350px] h-[200px] flex flex-col items-center justify-between bg-gray-50 rounded-[10px] fixed z-10 hidden"
        >
          <div className="w-[130px] flex flex-col items-center">
            {headerArray.map((items, index) => (
              <Link
                href={`/${items === "Home" ? "/" : items}`}
                key={index}
                className="w-full h-[50px] flex flex-col gap-[10px] items-center justify-center text-[20px] font-normal text-gray-800"
              >
                {items}
              </Link>
            ))}
          </div>
          <Search />
        </motion.div>
      )}
    </div>
  );
};
export default MenuClicked;

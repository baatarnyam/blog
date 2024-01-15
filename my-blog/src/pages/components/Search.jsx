import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="md:w-[166px] md:h-[36px] md:flex gap-[10px] items-center rounded-[5px] pl-[16px] pr-[4px] bg-gray-100">
      <input
        className="w-[114px] h-[20px] text-[14px] text-gray-500 bg-gray-100 font-normal border-none"
        type="text"
        placeholder="Search"
        style={{ border: "none" }}
      ></input>
      <CiSearch className="w-[16px] h-[16px] text-gray-500" />
    </div>
  );
};
export default Search;

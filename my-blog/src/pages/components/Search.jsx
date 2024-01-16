import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="md:w-[166px] md:h-[36px] flex gap-[10px] items-center justify-between rounded-[5px] md:pl-[16px] md:pr-[4px] bg-gray-100 w-[300px] h-[30px]">
      <input
        className="md:w-[114px] md:h-[20px] text-[14px] text-gray-500 bg-gray-100 font-normal border-none w-[250px] h-[15px]"
        type="text"
        placeholder="Search"
        style={{ border: "none" }}
      ></input>
      <CiSearch className="w-[16px] h-[16px] text-gray-500" />
    </div>
  );
};
export default Search;

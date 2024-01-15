import Image from "next/image";
import Header from "./components/Header";
import Slide from "./components/Slide";
import Trending from "./components/Trending";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-[100px] items-center">
      <div className="md:w-[1600px] md:h-fit flex flex-col md:gap-[100px] w-[390px] h-full  items-center border">
        <Header />
        <Slide />
        <Trending />
      </div>
    </div>
  );
}

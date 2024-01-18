import Slide from "./components/Slide";
import Trending from "./components/Trending";
import AllBlog from "./components/AllBlog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-[100px] items-center">
      <div className="md:w-[1600px] md:h-fit flex flex-col md:gap-[100px] w-[390px] h-fit gap-[40px] items-center">
        <Slide />
        <Trending />
        <AllBlog />
        <Footer />
      </div>
    </div>
  );
}

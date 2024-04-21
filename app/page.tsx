import FifthPage from "@/components/FifthPage";
import FourthPage from "@/components/FourthPage";
import FrontPage from "@/components/FrontPage";
import SecondPage from "@/components/SecondPage";
import SixthPage from "@/components/SixthPage";
import ThirdPage from "@/components/ThirdPage";
import Image from "next/image";

export default function Home() {
  return (
      <div className="h-full w-full ">
       <FrontPage/>
       <SecondPage/>
       <ThirdPage/>
       <FourthPage />
        <FifthPage/>
        <SixthPage/>
      </div>
  );
}

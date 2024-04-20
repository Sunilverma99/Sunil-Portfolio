import FrontPage from "@/components/FrontPage";
import SecondPage from "@/components/SecondPage";
import ThirdPage from "@/components/ThirdPage";
import Image from "next/image";

export default function Home() {
  return (
      <div className="h-full w-full ">
       <FrontPage/>
       <SecondPage/>
       <ThirdPage/>
      </div>
  );
}

import FrontPage from "@/components/FrontPage";
import SecondPage from "@/components/SecondPage";
import Image from "next/image";

export default function Home() {
  return (
      <div className="h-full w-full ">
       <FrontPage/>
       <SecondPage/>
      </div>
  );
}

import { logoText } from "@/lib/data";
import Image from "next/image";

interface LogoProps {
  onClick: Function;
}

export default function Logo({ onClick }: LogoProps) {
  return (
    // <div
    //   onClick={() => onClick()}
    //   className="cursor-pointer flex border max-w-fit px-2 py-1 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80"
    // >
    //   {/* {logoText} */}
    // </div>
    <></>
  );
}

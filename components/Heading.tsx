import Link from "next/link";
import Image from "next/image";
import UnderLine from "@/public/underline.svg";

const Heading =  ({children}:{children:string}) =>{
    return (<div className="relative">
        <h2 className="xl:text-5xl md:text-3xl absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {children}
        </h2>
        <Image src={UnderLine} alt={"underline Image"} className="w-full" />
      </div>)
}

Heading.displayName = "Heading"

export {
  Heading
}
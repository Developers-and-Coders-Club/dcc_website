"use client"
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { HackerTextTag } from "@/components/HackerTags";
import { IconType } from "react-icons";
import Image from "next/image";
import { createAvatar } from "@dicebear/core";
import {lorelei} from "@dicebear/collection"
import { SyntheticEvent, useState } from "react";

const TeamCard = ({
  name,
  designation,
  profile_url,
  twitter,
  linkedin,
  github,
}: {
  name: string;
  designation: string;
  profile_url: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
}) => {
  const avatar = createAvatar(lorelei,{seed:""+Math.random()})
  return (
    <div className="group w-fit">
      <div className="relative grid h-64 w-64 grid-cols-2 grid-rows-2 overflow-hidden rounded fill-white">
       <FallbackImage src={profile_url} fallbackSrc={avatar.toDataUri()} /> 
        
        <SocialIcon Icon={FaXTwitter} link={twitter} />
        <SocialIcon Icon={FaLinkedin} link={linkedin} />
        <div className="h-32 w-32 "></div>
        <SocialIcon Icon={FaGithub} link={github} />
      </div>
      <div className="py-4 transition-all">
        <h4 className="md:text-xl font-medium text-white">
          <HackerTextTag className="font-mono">{name}</HackerTextTag>
        </h4>
        <span className="md:text-sm text-xs text-white">
          <HackerTextTag className="font-mono">{designation}</HackerTextTag>
        </span>
      </div>
    </div>
  );
};

const FallbackImage = ({src, fallbackSrc}:{src:string, fallbackSrc:string}) =>{

  "use client"
  const [imgURL, setUrl] = useState<string>(src);
  return (
    <Image
          src={imgURL}
          alt="profile"
          className="duration-350 object-cover absolute z-10 h-full w-full bg-gray-950 transition-all group-hover:-translate-x-16 group-hover:translate-y-16 group-hover:scale-50 filter grayscale-0 group-hover:grayscale"
          width={800}
          height={800}
          onError={(eve)=>{
            setUrl(fallbackSrc)
          }}
        />
  )
}
TeamCard.displayName = "TeamCard";
export { TeamCard };
const SocialIcon = ({ Icon, link }: { Icon: IconType; link?: string }) => {
  return (
    <div className="relative h-32 w-32">
      <a href={link} target="_blank" rel="noopener">
        <Icon
          className={`absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded p-5 transition-all hover:bg-slate-800 ${
            link ? "fill-white" : "fill-gray-400"
          }`}
        />
      </a>
    </div>
  );
};

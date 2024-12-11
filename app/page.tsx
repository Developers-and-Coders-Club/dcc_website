import Image from "next/image";
import Link from "next/link"
import Lines from "@/public/Home/lines.svg";
import UnderLine from "@/public/underline.svg";
import Box from "@/public/Home/box.svg";
import Dots from "@/public/Home/dots.svg"
import { Heading } from "@/components/Heading";


export default function Home() {
  return (      
      <main className="bg-[#0E0F18] text-white relative space-y-10">
        <section className="xl:mx-40 xl:pt-24 lg:mx-28 lg:pt-16 md:mx-24 mx-10 md:pt-12 flex flex-col xl:justify-normal justify-center xl:h-screen lg:h-[80vh] md:h-[60vh] h-screen">
          <h2 className="md:text-5xl text-3xl py-5 font-medium tracking-light">
            Dream <span className="text-[#02A89A]">Code</span> Conquer
          </h2>
          <h3 className="md:text-3xl text-xl font-medium">Developers & Coders Club</h3>
          <p className="pb-5">/dɪˈvɛləpɜːz ənd ˈkəʊdɜːz klʌb/</p>
          <p className="md:w-96 w-64 md:text-base text-sm">
            An initiative of NIT Agartala to bring like-minded Coders and
            Developers of exceptional knowledge and expertise together to
            encourage college students to code and compete with the world.
          </p>
          <Link
            href="https://www.youtube.com/@DCCNITA"
            className="text-xl px-8 py-2 bg-[#02a89a] rounded-xl w-fit my-4 z-10"
            target="_blank"
            rel="noopener"
          >
            Learn With Us
          </Link>
        </section>

        <Image
          className="absolute  xl:-top-4 md:-top-20 md:block hidden w-full aspect-video h-screen "
          src={Lines}
          alt={"logo lines"}
        />
        <section className="">
          <Heading>What we Do</Heading>
          <article className="flex xl:flex-row flex-col gap-10 lg:mx-40 md:mx-24 mx-10 py-10 justify-between items-center ">
            <div className="space-y-5">
              <h3 className="text-4xl">Create Awareness:</h3>
              <p className="xl:w-96">
                We raise awareness of the multitude of opportunities available,
                such as internships with tech giants like Google and Microsoft,
                national coding competitions and hackathons hosted by tech
                companies, and opportunities to collaborate on projects to
                develop skills. By highlighting these opportunities, we strive
                to empower individuals to take advantage of them and reach their
                full potential.
              </p>
            </div>
            <div className="relative">
              <Image
                src={
                  "https://firebasestorage.googleapis.com/v0/b/dcc-nita.appspot.com/o/Rectangle1.png?alt=media&token=19986571-aea3-4639-a0f5-466e3593defc"
                }
                className="aspect-video object-cover z-10 "
                alt={"activites"}
                width={1920}
                height={1080}
                quality={100}
              />
            </div>
          </article>
          <article className="flex xl:flex-row flex-col gap-10 lg:mx-40 md:mx-24 mx-10 py-10 justify-between items-center ">
            <div className="relative">
              <Image
                src={
                  "https://firebasestorage.googleapis.com/v0/b/dcc-nita.appspot.com/o/Rectangle2.png?alt=media&token=2aaf9083-5532-42d7-8216-6ba3f6ca5da6"
                }
                className="aspect-video object-cover z-10"
                alt={"activites"}
                width={1920}
                height={1080}
                quality={100}
              />
            </div>
            <div className="">
              <h3 className="text-4xl py-5">Community support:</h3>
              <p className="xl:w-96 ">
                We provide a tech community that forms a global network,
                connecting elite developers and coders to share their knowledge
                and experience, and learn from one another. Our goal is to help
                you maximize your learning potential and bring you closer to
                like-minded individuals. So, pursue your dreams and code
                robustly - we are here to support you every step of the way.
              </p>
            </div>
          </article>
        </section>
      </main>
  );
}

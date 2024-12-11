import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AiFillDiscord } from "react-icons/ai";
import "./globals.css";
import Logo from "@/public/Header/logo-light.png";
import logo from "@/public/Home/logo.png";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DCC - Home",
  description:
    "We raise awareness of the multitude of opportunities available,such as internships with tech giants like Google and Microsoft, national coding competitions and hackathons hosted by tech companies, and opportunities to collaborate on projects to develop skills. By highlighting these opportunities, we strive to empower individuals to take advantage of them and reach their full potential.",
  keywords: ["DCC", "NIT Agartala", "CP", "DCCNITA"],
  openGraph: {
    images: "/Home/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#0E0F18] ${montserrat.className}`}>
        <header className="text-white p-3 flex items-center justify-between bg-[#0E0F18] md:mx-10 mx-2">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src={Logo}
              alt="Logo"
              className="md:h-20 md:w-20 h-10 w-10"
            />
            <h1 className="text-sm">Developers & Coders Club</h1>
          </Link>
          <nav className="md:flex items-center lg:gap-10 gap-4  hidden z-10">
            <Link
              className="hover:text-gray-200"
              href="https://isro-space-hackathon.vercel.app/"
            >
              <HoverBorderGradient containerClassName="rounded-full">
                <span>ISRO{"'"}s HACKATHON</span>
              </HoverBorderGradient>
            </Link>
            <Link className="hover:text-gray-200" href="/">
              Home
            </Link>
            <Link href="/events">Events</Link>
            <Link
              target="_blank"
              rel="noopener"
              href="http://cphub.dccnita.in/"
            >
              CP Hub
            </Link>
            <Link href="https://blog.dccnita.in">Blog</Link>
            <Link href="/teams">Teams</Link>
          </nav>
          <Sheet>
            <SheetTrigger className="md:hidden block">
              <GiHamburgerMenu />
            </SheetTrigger>
            <SheetContent className="bg-[#0E0F18] ">
              <SheetHeader>
                <SheetTitle className="text-white">
                  Developers and Coders Club
                </SheetTitle>
                <SheetDescription className="h-full">
                  <nav className="flex flex-col items-center justify-center gap-4">
                    <Link className="hover:text-gray-200" href="/">
                      Home
                    </Link>
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="http://cphub.dccnita.in/"
                    >
                      CP Hub
                    </Link>
                    <Link href="/events">Events</Link>
                    <Link href="https://blog.dccnita.in">Blog</Link>
                    <Link href="/teams">Teams</Link>
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </header>
        {children}
        <footer
          className={`md:px-[10%] px-2 py-5 bg-slate-800 text-white md:space-y-4 space-y-2 md:mx-10 mx-2`}
        >
          <div className="flex justify-between">
            <div className="md:flex gap-5 items-center">
              <Image
                src={logo}
                alt={"logo"}
                className="md:w-16 md:h-16 w-8 h-8 aspect-auto"
                height={512}
                width={512}
              />

              <h4 className="uppercase font-medium md:text-2xl text-sm">
                Developers & Coders Club NITA
              </h4>
            </div>
            <nav className="flex items-center md:space-x-5 space-x-2 md:text-base text-sm">
              <Link href="/" title="Home">
                Home
              </Link>
              <Link href="/events" title="Events">
                Events
              </Link>
              <Link href="/teams" title="Teams">
                Teams
              </Link>
            </nav>
          </div>
          <div className="flex justify-between w-full py-4 items-center">
            <div className="space-y-8">
              <p className="font-normal md:text-base text-xs">
                National Institute of Technology, Agartala,
                <br />
                Jirania, Tripura - 799046
              </p>
            </div>
            <div>
              <h4 className="md:text-2xl text-base uppercase font-medium text-right">
                Social
              </h4>
              <div className="flex items-center justify-around md:gap-5 gap-2 py-2">
                <Link
                  href="https://twitter.com/dccnita"
                  target="_blank"
                  rel="noopener"
                >
                  <FiTwitter className="aspect-square md:h-7 md:w-7 h-3 w-3" />
                </Link>
                <Link
                  href="https://www.instagram.com/dccnita/"
                  target="_blank"
                  rel="noopener"
                >
                  <FiInstagram className="aspect-square md:h-7 md:w-7 h-3 w-3" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/dccnita/"
                  target="_blank"
                  rel="noopener"
                >
                  <FiLinkedin className="aspect-square md:h-7 md:w-7 h-3 w-3" />
                </Link>
                <Link
                  href="https://discord.gg/58qJhGtTaa"
                  target="_blank"
                  rel="noopener"
                >
                  <AiFillDiscord className="aspect-square md:h-7 md:w-7 h-3 w-3" />
                </Link>

                <Link
                  href="https://www.youtube.com/@DCCNITA"
                  target="_blank"
                  rel="noopener"
                >
                  <FiYoutube className="aspect-square md:h-7 md:w-7 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

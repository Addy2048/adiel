import Image from "next/image";
import LandingImage from "../../public/coding.jpg";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Landing() {
  return (
    <div className="w-screen h-screen relative">
      <Image
        src={LandingImage}
        height={5000}
        width={5000}
        className="w-full h-full object-cover"
        alt=""
      />
      <div className="h-full w-full bg-black/70 absolute top-0 right-0 backdrop-blur-sm flex flex-col justify-center items-center">
        <p className="text-2xl md:text-6xl xl:text-8xl font-bold text-center px-4">
          Meet Adiel Elifelet Azaliwa
        </p>
        <div className="hidden md:flex flex-row justify-center gap-8 mt-4">
          <Link href={"https://github.com/Addy2048"}>
            <FaGithub color="#FFFFFF" size={48} />
          </Link>
          <Link href={"https://x.com/AdielElifelet"}>
            <FaXTwitter color="#FFFFFF" size={48} />
          </Link>
          <Link href={"https://www.linkedin.com/in/adiel-azaliwa-2093921b9/"}>
            <FaLinkedin color="#FFFFFF" size={48} />
          </Link>
          <Link
            href={
              "https://www.instagram.com/adiel_elifelet/profilecard/?igsh=MXZlMGhicGcyZWoxOA=="
            }
          >
            <FaInstagram color="#FFFFFF" size={48} />
          </Link>
        </div>
        <div className="flex flex-row justify-center gap-4 md:gap-8 mt-4 md:hidden">
          <Link href={"https://github.com/Addy2048"}>
            <FaGithub color="#FFFFFF" size={24} />
          </Link>
          <Link href={"https://x.com/AdielElifelet"}>
            <FaXTwitter color="#FFFFFF" size={24} />
          </Link>
          <Link href={"https://www.linkedin.com/in/adiel-azaliwa-2093921b9/"}>
            <FaLinkedin color="#FFFFFF" size={24} />
          </Link>
          <Link
            href={
              "https://www.instagram.com/adiel_elifelet/profilecard/?igsh=MXZlMGhicGcyZWoxOA=="
            }
          >
            <FaInstagram color="#FFFFFF" size={24} />
          </Link>
        </div>
        <div className="mt-8 flex flex-row gap-12">
          <a
            href={"/AdielCV.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white bg-transparent rounded-[40px] px-4 py-2 text-lg md:text-xl font-bold"
          >
            Get Resume
          </a>
          <button className="border-2 border-white bg-transparent rounded-[40px] px-4 py-2 text-lg md:text-xl font-bold">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

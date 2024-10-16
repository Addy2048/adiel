import Link from "next/link";
import { FaGithub, FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#374151] py-12">
      <div className="flex flex-row justify-center gap-4 mt-4 mb-4">
        <Link href={"https://github.com/Addy2048"}>
          <FaGithub color="#9CA3AF" size={24} />
        </Link>
        <Link href={"https://x.com/AdielElifelet"}>
          <FaXTwitter color="#9CA3AF" size={24} />
        </Link>
        <Link href={"https://www.linkedin.com/in/adiel-azaliwa-2093921b9/"}>
          <FaLinkedin color="#9CA3AF" size={24} />
        </Link>
        <Link
          href={
            "https://www.instagram.com/adiel_elifelet/profilecard/?igsh=MXZlMGhicGcyZWoxOA=="
          }
        >
          <FaInstagram color="#9CA3AF" size={24} />
        </Link>
      </div>
      <p className="text-center text-[#9CA3AF]">
        &copy; copyright {new Date().getFullYear()} Adiel E. A
      </p>
    </div>
  );
}

import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="w-full py-16 flex flex-row justify-center bg-[#0F172A]">
      <div className="w-full md:w-1/2 flex flex-row flex-wrap">
        <form className="w-full xl:w-1/2 px-4">
          <input
            className="h-12 w-full p-4 block mb-4 rounded bg-[#334155]"
            type="text"
            name="fullName"
            placeholder="Your Name"
            required
          />
          <input
            className="h-12 w-full p-4 block mb-4 rounded bg-[#334155]"
            type="email"
            name="email"
            required
            placeholder="Email"
          />
          <textarea
            className="w-full p-4 block mb-4 rounded bg-[#334155]"
            required
            placeholder="Message"
            rows={8}
          ></textarea>
          <button className="border-2 border-white bg-transparent rounded-[40px] px-4 py-1 text-lg md:text-xl font-bold mt-4">
            Send Message
          </button>
        </form>
        <div className="w-full xl:w-1/2 px-4 order-first xl:order-last mb-8">
          <div>
            <p className="text-2xl font-bold">Get in touch</p>
          </div>

          <p className="mt-4">
            Whether you have an innovative project or a more straightforward
            one, I’m ready to help bring it to life. Feel free to reach out, and
            let’s work together!
          </p>
          <div className="flex flex-row gap-2 items-center mt-8">
            <FaEnvelope size={24} /> <span>aazaliwa@gmail.com</span>
          </div>
          <Link
            href={"https://www.linkedin.com/in/adiel-azaliwa-2093921b9/"}
            className="flex flex-row gap-2 items-center mt-4"
          >
            <FaLinkedin size={24} />
            <span>Adiel Azaliwa</span>
          </Link>
          <Link
            href={"https://github.com/Addy2048"}
            className="flex flex-row gap-2 items-center mt-4"
          >
            <FaGithub size={24} /> <span>Addy2048</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

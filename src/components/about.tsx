import Image from "next/image";
import AdielImg from "../../public/adiel.jpeg";

export default function AboutAdiel() {
  return (
    <div className="w-full py-16 px-12 flex flex-row justify-center gap-12">
      <div className="h-80 w-64 pt-2">
        <Image
          src={AdielImg}
          alt=""
          height={5000}
          width={5000}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="max-w-lg">
        <p className="text-2xl font-bold mb-4">Who is Adiel</p>
        <p className="text-lg">
          I am a dedicated and ambitious professional with a unique background
          in both Food Science and Technology (FST) and Computer Engineering.
          After earning my diploma in FST, I pursued a degree in Computer
          Engineering to leverage technology in driving innovation within the
          food industry. As a skilled full-stack web and mobile app developer, I
          specialize in both front-end and back-end development. Additionally, I
          work extensively with embedded systems, using various controllers and
          sensors for IoT applications. My diverse skill set and passion for
          technology make me a valuable partner for anyone looking to
          collaborate on forward-thinking projects in tech and beyond.
        </p>
      </div>
    </div>
  );
}

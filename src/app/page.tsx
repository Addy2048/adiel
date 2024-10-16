import AboutAdiel from "@/components/about";
import Footer from "@/components/footer";
import Landing from "@/components/landing";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Landing />
      <AboutAdiel />
      <Footer />
    </div>
  );
}

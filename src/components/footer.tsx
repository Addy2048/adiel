import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="copy">
          © {new Date().getFullYear()} Adiel Elifelet Azaliwa · Built with care
        </div>
        <Link href="#top" className="top" data-hot>
          Back to top <span>↑</span>
        </Link>
      </div>
    </footer>
  );
}

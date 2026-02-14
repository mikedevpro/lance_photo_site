import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            Lance Larson Photography
          </Link>

          <nav className="flex items-center gap-5 text-sm text-white/80">
            <Link className="hover:text-white" href="/portfolio">Portfolio</Link>
            <Link className="hover:text-white" href="/services">Services</Link>
            <Link className="hover:text-white" href="/booking">Booking</Link>
            <Link className="hover:text-white" href="/contact">Contact</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}

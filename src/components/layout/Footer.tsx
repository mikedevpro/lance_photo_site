import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-white/60">
      <Container>
        <div className="flex flex-col gap-2">
          <div>© {new Date().getFullYear()} Lance Larson Photography</div>
          <div className="text-white/40">Exotic • Weddings • Events</div>
        </div>
      </Container>
    </footer>
  );
}

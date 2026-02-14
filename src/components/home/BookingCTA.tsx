import Link from "next/link";
import Container from "@/components/layout/Container";

export default function BookingCTA() {
  return (
    <section className="py-14 border-t border-white/10">
      <Container>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-xl font-semibold">Ready to book?</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70">
            Tell me what you’re planning and I’ll help you lock in a date, choose the right package, and bring your vision to life.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/booking" className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black">
              Book a Session
            </Link>
            <Link href="/contact" className="rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

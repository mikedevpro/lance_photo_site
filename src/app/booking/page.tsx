import Container from "@/components/layout/Container";

export const metadata = { title: "Booking | Lance Larson Photography" };

export default function BookingPage() {
  return (
    <section className="py-10">
      <Container>
        <h1 className="text-2xl font-semibold">Booking</h1>
        <p className="mt-2 text-sm text-white/70">
          Embed Calendly here, or link out to a booking URL.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
          Calendly embed goes here.
        </div>
      </Container>
    </section>
  );
}

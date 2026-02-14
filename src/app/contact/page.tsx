import Container from "@/components/layout/Container";

export const metadata = { title: "Contact | Lance Larson Photography" };

export default function ContactPage() {
  return (
    <section className="py-10">
      <Container>
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p className="mt-2 text-sm text-white/70">
          Add a form, email link, and social links here.
        </p>
      </Container>
    </section>
  );
}

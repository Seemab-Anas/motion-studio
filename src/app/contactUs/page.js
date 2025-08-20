import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "Contact Us | Clarygen",
  description: "Get in touch with Clarygen. We'd love to hear about your project.",
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <ContactForm />
    </main>
  );
}

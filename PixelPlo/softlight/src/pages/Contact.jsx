
import ContactFaq from "../components/contact/ContactFaq";
import ContactForm from "../components/contact/ContactForm";
import HeroSection from "../components/contact/HeroSection";

const Contact = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <ContactForm />
      <ContactFaq />
    </div>
  );
};

export default Contact;

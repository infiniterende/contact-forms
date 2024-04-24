import "./globals.css";
import ContactFormPage from "./simpleform/page";
import ContactForm2Page from "./floatingform/page";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-var(--blue) to-var(--lightblue)">
      <div>
        <ContactFormPage />
      </div>
    </div>
  );
}

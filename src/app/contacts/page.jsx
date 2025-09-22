import Contacts from "../components/contacts-details/contacts";
import Faqs from "../components/contacts-details/faqs";
import Partners from "../components/contacts-details/projects";

export default function ContactUs() {
  return (
    <div className="max-w-9xl mx-auto">
      <Contacts />
      <Faqs />
      <Partners />
    </div>
  );
}

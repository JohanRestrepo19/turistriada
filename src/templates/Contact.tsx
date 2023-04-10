import { ContactSection } from '../contact/ContactSection';
import { Section } from '../layout/Section';

export const Contact = () => (
  <Section title="Contactanos">
    <ContactSection
      description={
        <>
          ¿Tienes alguna duda? <br /> Haznoslo saber
        </>
      }
      image="/assets/images/contact.png"
      imageAlt="Image"
    />
  </Section>
);

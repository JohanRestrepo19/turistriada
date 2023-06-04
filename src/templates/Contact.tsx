import { ContactSection } from '../contact/ContactSection';
import { Section } from '../layout/Section';

export const Contact = () => (
  <div id="contact">
    <Section title="Contáctanos">
      <ContactSection
        description={
          <>
            ¿Tienes alguna duda? <br /> Dejános tu mensaje
          </>
        }
        image="/assets/images/contact.png"
        imageAlt="Image"
      />
    </Section>
  </div>
);

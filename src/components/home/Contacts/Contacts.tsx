import Container from "../../common/Container/Container";
import Heading from "../../common/Heading/Heading";
import Section from "../../common/Section/Sections";

import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <Section id="contact" background="blue">
      <Container>

        <div className="mx-auto">

          <Heading
            title="Let's Connect"
            subtitle="Interested in discussing an opportunity, collaborating on a project, or simply saying hello? I'd love to hear from you."
          />

          <div className="mt-12">
            <ContactInfo />
          </div>

        </div>

      </Container>
    </Section>
  );
};

export default Contact;
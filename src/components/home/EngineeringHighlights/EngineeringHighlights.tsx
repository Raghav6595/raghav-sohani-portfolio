import Card from "../../common/Card/Card";
import Container from "../../common/Container/Container";
import Heading from "../../common/Heading/Heading";

import { engineeringHighlights } from "../../../content/highlights";
import Section from "../../common/Section/Sections";

const EngineeringHighlights = () => {
  return (
    <Section id="highlights">
      <Container>
        <Heading
          title="Engineering Highlights"
          subtitle="Key areas where I have delivered value across enterprise projects."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {engineeringHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title}>
                <Icon
                  size={34}
                  className="mb-5 text-blue-600"
                />

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default EngineeringHighlights;
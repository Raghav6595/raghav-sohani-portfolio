import Card from "../../common/Card/Card";
import Container from "../../common/Container/Container";
import Heading from "../../common/Heading/Heading";
import Section from "../../common/Section/Sections";

import { engineeringHighlights } from "../../../content/highlights";

const EngineeringHighlights = () => {
  return (
    <Section id="highlights" background="gray">
      <Container>
        <Heading
          title="Engineering Highlights"
          subtitle="Key areas where I have delivered value across enterprise-scale applications."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {engineeringHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title}>
                <div className="flex h-full flex-col">

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                    <Icon
                      size={28}
                      className="text-blue-600"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600">
                    {item.description}
                  </p>

                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default EngineeringHighlights;
import Card from "../../common/Card/Card";
import Container from "../../common/Container/Container";
import Heading from "../../common/Heading/Heading";

import { awards } from "../../../content/awards";
import Section from "../../common/Section/Sections";

const Awards = () => {
  return (
    <Section id="awards">
      <Container>
        <Heading
          title="Awards & Recognition"
          subtitle="Recognition received for technical excellence and consistent project contributions."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {awards.map((award) => {
            const Icon = award.icon;

            return (
              <Card key={award.title}>
                <Icon
                  size={38}
                  className="mb-5 text-yellow-500"
                />

                <h3 className="text-xl font-bold">
                  {award.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {award.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Awards;
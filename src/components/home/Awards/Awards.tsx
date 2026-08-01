import Card from "../../common/Card/Card";
import Container from "../../common/Container/Container";
import Heading from "../../common/Heading/Heading";
import Section from "../../common/Section/Sections";

import { awards } from "../../../content/awards";

const Awards = () => {
  return (
    <Section id="awards" background="gray">
      <Container>
        <Heading
          title="Awards & Recognition"
          subtitle="Recognition received for technical excellence, leadership and consistent project contributions."
        />

        <div className="grid gap-8 md:grid-cols-3">

          {awards.map((award) => {
            const Icon = award.icon;

            return (
              <Card key={award.title}>

                <div className="flex h-full flex-col">

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-50">

                    <Icon
                      size={30}
                      className="text-yellow-500"
                    />

                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {award.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-8 text-gray-600">
                    {award.description}
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

export default Awards;
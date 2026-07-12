import Container from "../../common/Container/Container";
import Heading from "../../common/Heading/Heading";
import Card from "../../common/Card/Card";

import { skillCategories } from "../../../content/skills";
import Section from "../../common/Section/Sections";

const TechStack = () => {
  return (
    <Section id="tech-stack">
      <Container>
        <Heading
          title="Tech Stack"
          subtitle="Technologies and tools I use to build scalable applications."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <h3 className="mb-4 text-xl font-bold">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-3 py-2 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TechStack;
import {
    Monitor,
    Server,
    Database,
    TestTube2,
    Cloud,
    Wrench,
} from "lucide-react";

import Container from "../../common/Container/Container";
import Heading from "../../common/Heading/Heading";
import Card from "../../common/Card/Card";

import { skillCategories } from "../../../content/skills";
import Section from "../../common/Section/Sections";

const categoryIcons: Record<string, React.ReactNode> = {
    Frontend: <Monitor size={22} className="text-blue-600" />,
    Backend: <Server size={22} className="text-green-600" />,
    Database: <Database size={22} className="text-purple-600" />,
    Testing: <TestTube2 size={22} className="text-orange-500" />,
    "Cloud & DevOps": <Cloud size={22} className="text-sky-600" />,
    Tools: <Wrench size={22} className="text-gray-700" />,
};

const TechStack = () => {
    return (
        <Section id="tech-stack" background="white">
            <Container>
                <Heading
                    title="Tech Stack"
                    subtitle="Technologies and tools I use to design, build and maintain enterprise-grade web applications."
                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category) => (
                        <Card key={category.title}>
                            <div className="flex h-full flex-col">

                                <div className="mb-5 flex items-center gap-3">

                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">

                                        {categoryIcons[category.title]}

                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900">

                                        {category.title}

                                    </h3>

                                </div>

                                <div className="flex flex-wrap gap-3">

                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-100"
                                        >
                                            {skill}
                                        </span>
                                    ))}

                                </div>

                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default TechStack;
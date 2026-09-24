import {
    ExternalLink,
    CheckCircle2,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import Container from "../../common/Container/Container";
import Heading from "../../common/Heading/Heading";
import Section from "../../common/Section/Sections";

import { featuredProjects } from "../../../content/projects";

import prasthanamImage from "../../../assets/images/prasthanam-home.png";
import interviewCoachImage from "../../../assets/images/ai-interview-coach.png";

const projectImages: Record<string, string> = {
    prasthanam: prasthanamImage,
    interviewCoach: interviewCoachImage,
};

const FeaturedProject = () => {
    return (
        <Section id="projects">
            <Container>

                <Heading
                    title="Featured Projects"
                    subtitle="A showcase of my full-stack, frontend and AI-powered development work."
                />

                <div className="space-y-28">

                    {featuredProjects.map((project, index) => {

                        const isReverse = index % 2 !== 0;

                        return (
                            <div
                                key={project.id}
                                className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16"
                            >

                                {/* PROJECT IMAGE */}

                                <div
                                    className={`flex h-full ${isReverse
                                            ? "lg:order-2"
                                            : "lg:order-1"
                                        }`}
                                >
                                    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                                        {/* Browser Header */}
                                        <div className="flex items-center gap-2 border-b bg-gray-100 px-4 py-3">
                                            <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                            <div className="h-3 w-3 rounded-full bg-green-400"></div>
                                        </div>

                                        {/* Screenshot */}
                                        <div className="aspect-[10/9] w-full overflow-hidden">
                                            <img
                                                src={projectImages[project.image]}
                                                alt={project.title}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                    </div>
                                </div>

                                {/* PROJECT DETAILS */}

                                <div
                                    className={`flex flex-col justify-center ${isReverse
                                            ? "lg:order-1"
                                            : "lg:order-2"
                                        }`}
                                >

                                    {/* Small Project Number */}

                                    <span className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                                        Project 0{index + 1}
                                    </span>

                                    <h3 className="text-4xl font-bold text-gray-900">
                                        {project.title}
                                    </h3>

                                    <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}

                                    <div className="mt-8 flex flex-wrap gap-3">

                                        {project.technologies.map(
                                            (tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}

                                    </div>

                                    {/* Features */}

                                    <div className="mt-10 space-y-4">

                                        {project.features.map(
                                            (feature) => (
                                                <div
                                                    key={feature}
                                                    className="flex items-start gap-3"
                                                >

                                                    <CheckCircle2
                                                        size={18}
                                                        className="mt-1 shrink-0 text-green-600"
                                                    />

                                                    <span className="text-gray-700">
                                                        {feature}
                                                    </span>

                                                </div>
                                            )
                                        )}

                                    </div>

                                    {/* Buttons */}

                                    <div className="mt-10 flex flex-wrap gap-4">

                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
                                        >

                                            <ExternalLink size={18} />

                                            Live Demo

                                        </a>

                                        {project.githubUrl && (
                                            <a
                                                href={
                                                    project.githubUrl
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 hover:shadow-xl"
                                            >

                                                <FaGithub size={18} />

                                                GitHub

                                            </a>
                                        )}

                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </Container>
        </Section>
    );
};

export default FeaturedProject;
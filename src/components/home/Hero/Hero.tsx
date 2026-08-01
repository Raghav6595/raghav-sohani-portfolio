
import Container from "../../common/Container/Container";


import Section from "../../common/Section/Sections";
import HeroProfileCard from "./HeroProfileCard";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
    return (
        <Section id="hero" background="gray">

            <Container>

                <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">

                    {/* LEFT */}

                    <div>

                        

                        <h1 className="text-4xl font-extrabold leading-tight lg:text-5xl">

                            Hi, I'm

                            <br />

                            <span className="text-blue-600">
                                Raghav Sohani
                            </span>

                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">

                            Frontend Expertise | Fullstack Exposure with 9+ years of experience delivering enterprise-scale web applications using React,Angular, Java, Spring Boot and MongoDB. Passionate about clean architecture, accessibility, performance optimization and mentoring development teams.

                        </p>

                       
                        <div className="mt-10 flex flex-wrap gap-4">

                            <a
                                href="#projects"
                                className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                            >
                                View Projects

                                <ArrowRight size={18} />

                            </a>

                            <a
                                href="Raghav_Sohani.pdf"
                                download
                                className="flex items-center gap-2 rounded-xl border border-gray-300 px-8 py-4 font-semibold transition hover:border-blue-600 hover:text-blue-600"
                            >
                                <Download size={18} />

                                Download Resume

                            </a>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <HeroProfileCard />

                </div>

            </Container>

        </Section>
    );
};

export default Hero;
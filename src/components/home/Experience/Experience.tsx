
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Section from "../../common/Section/Sections";
import Container from "../../common/Container/Container";

import award1 from "../../../assets/images/Top_Talent_26.jpg";
import award2 from "../../../assets/images/Top_Talent_25.jpg";
import award3 from "../../../assets/images/Top_Talent_24.jpg";

const awardImages = [award1, award2, award3];

const experiences = [
  {
    company: "Persistent Systems",
    role: "Senior Engineering Lead",
    period: "Nov 2022 – Present",
  },
  {
    company: "Accenture Solutions",
    role: "Software proSoftware Prod & Plat Eng Sr Analyst",
    period: "2021 – 2022",
  },
  {
    company: "Tata Consultancy Services",
    role: "System Engineer",
    period: "2016 – 2021",
  },
];

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % awardImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="experience" background="gray">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold lg:text-4xl">
            Experience & Recognition
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            A journey of building enterprise-scale applications, leading frontend
            initiatives, and being recognized for consistent technical excellence
            and delivery impact.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative border-l-4 border-blue-600 pl-6"
              >
                <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-blue-600" />

                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.company}
                </h3>

                <p className="mt-1 font-medium text-blue-600">{exp.role}</p>

                <p className="mt-1 text-sm text-gray-500">{exp.period}</p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl h-[360px] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="absolute inset-0 flex items-center justify-center p-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={awardImages[currentIndex]}
                    alt={`Top Talent Award ${currentIndex + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {awardImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index
                        ? "w-6 bg-blue-600"
                        : "w-2 bg-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Experience;


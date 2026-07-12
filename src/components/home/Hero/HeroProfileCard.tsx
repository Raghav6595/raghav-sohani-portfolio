import {
  Briefcase,
  Users,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const HeroProfileCard = () => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

      <div className="mb-8">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Professional Snapshot
        </span>

      </div>

      <div className="space-y-5">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <Briefcase className="text-blue-600" size={20} />
            <span>Experience</span>
          </div>

          <strong>9+ Years</strong>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <Users className="text-blue-600" size={20} />
            <span>Team Leadership</span>
          </div>

          <strong>5 Developers</strong>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <Rocket className="text-blue-600" size={20} />
            <span>Angular/React Upgrades</span>
          </div>

          <strong>Enterprise</strong>

        </div>

      </div>

      <div className="my-8 border-t" />

      <h4 className="mb-4 font-semibold">
        Core Strengths
      </h4>

      <div className="space-y-3">

        {[
          "Enterprise Applications",
          "Performance Optimization",
          "React / Angular",
          "Java Spring Boot REST APIs",
          "Full Stack Development",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              size={18}
              className="text-green-600"
            />

            <span>{item}</span>

          </div>
        ))}

      </div>

      <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-4 text-center">

        <span className="font-semibold text-green-700">
          🟢 Open to New Opportunities
        </span>

      </div>

    </div>
  );
};

export default HeroProfileCard;
import { heroStats } from "../../../content/heroStats";

const HeroStats = () => {
  return (
    <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
      {heroStats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <h3 className="text-3xl font-bold text-blue-600">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
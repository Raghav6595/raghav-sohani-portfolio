import { lazy, Suspense } from "react";
import MainLayout from "../components/layout/MainLayout";
import PageLoader from "../components/common/PageLoader/PageLoader";
import Contacts from "../components/home/Contacts/Contacts";


const Hero = lazy(() => import("../components/home/Hero/Hero"));
const FeaturedProject = lazy(
  () => import("../components/home/FeaturedProject/FeaturedProject")
);
const TechStack = lazy(
  () => import("../components/home/TechStack/TechStack")
);
const EngineeringHighlights = lazy(
  () =>
    import(
      "../components/home/EngineeringHighlights/EngineeringHighlights"
    )
);
const Awards = lazy(
  () => import("../components/home/Awards/Awards")
);

const Contact = lazy(
  () => import("../components/home/Contacts/Contacts")
);

const Home = () => {
  return (
    <MainLayout>
      <Suspense fallback={<PageLoader />}>
        <Hero />
        <FeaturedProject />
        <TechStack />
        <EngineeringHighlights />
        <Awards />
        <Contacts />
      </Suspense>
    </MainLayout>
  );
};

export default Home;
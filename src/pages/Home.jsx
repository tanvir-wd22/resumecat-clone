import Banner from "../components/Banner";
import ResumeFeatures from "../components/ResumeFeatures";
import ResumeMaker from "../components/ResumeMaker";
import FreeTemplates from "../components/FreeTemplates";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import Carousel from "../components/Carousel";

// The background (bg-gray-50) goes edge to edge on the outer <section>.
// The content stays inside the same 1248px box as the banner.
const Container = ({ children, className = "" }) => (
  <section className={`py-12 sm:py-16 lg:py-20 ${className}`}>
    <div className="mx-auto max-w-7xl px-4">{children}</div>
  </section>
);

const Home = () => {
  return (
    <>
      {/* Banner has its own container and spacing, so no Container wrapper */}
      <Banner />

      <Container>
        <Carousel></Carousel>
      </Container>
      <Container>
        <ResumeFeatures />
      </Container>
      <Container>
        <ResumeMaker />
      </Container>
      <Container>
        <FreeTemplates />
      </Container>
      <Container>
        <Faq />
      </Container>
      <Container>
        <Cta />
      </Container>
    </>
  );
};

export default Home;

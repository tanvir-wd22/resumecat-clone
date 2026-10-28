import Banner from "../components/Banner";
import ResumeFeatures from "../components/ResumeFeatures";
import ResumeMaker from "../components/ResumeMaker";
import FreeTemplates from "../components/FreeTemplates";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import Carousel from "../components/Carousel";
import Container from "../components/Container";

const Home = () => {
  return (
    <>
      <Container>
        <Banner></Banner>
      </Container>

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

import Container from "../components/Container";
import RTinfo from "../components/RTinfo";
import RTtemplates from "../components/RTtemplates";
import RTbanner from "../components/RTbanner";
import RTdescription from "../components/RTdescription";

const ResumeTemplates = () => {
  return (
    <div>
      <Container>
        <RTinfo></RTinfo>
      </Container>
      <Container>
        <RTtemplates></RTtemplates>
      </Container>
      <Container>
        <RTbanner></RTbanner>
      </Container>
      <Container>
        <RTdescription></RTdescription>
      </Container>
    </div>
  );
};

export default ResumeTemplates;

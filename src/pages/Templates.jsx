import TemplateInfo from "../components/TemplateInfo";
import Container from "../components/Container";
import AllTemplates from "../components/AllTemplates";
const Templates = () => {
  return (
    <div>
      <Container>
        <TemplateInfo></TemplateInfo>
      </Container>
      <Container>
        <AllTemplates></AllTemplates>
      </Container>
    </div>
  );
};

export default Templates;

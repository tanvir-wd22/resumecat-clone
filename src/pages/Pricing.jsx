import Container from "../components/Container";
import PricingFaq from "../components/PricingFaq";
import PricingGrid from "../components/PricingGrid";

const Pricing = () => {
  return (
    <>
      <Container>
        <PricingGrid></PricingGrid>
      </Container>
      <Container>
        <PricingFaq></PricingFaq>
      </Container>
    </>
  );
};

export default Pricing;

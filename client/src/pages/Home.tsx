import { Container } from "@mui/material";
import Exampler from "../components/Exampler";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <Container
      maxWidth={"lg"}
      sx={{
        height: "auto",
      }}
    >
      <Hero />
      <Steps />
      <Exampler />
      <Testimonials />
    </Container>
  );
};

export default Home;

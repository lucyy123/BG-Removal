import { Box, Stack } from "@mui/material";
import GradientButton from "./Button";
import CustomersCards from "./CustomersCards";
import Heading from "./Heading";

const Testimonials = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        padding: "4rem 0rem",
      }}
    >
      {/* ---------------------------------- heading------------------------------------- */}

      <Heading t1="Customer Testimonials " t2="" />

      {/* ----------------- customer  cards ------------------------------ */}

      <CustomersCards />

      {/* ------------------------------------- Heading-------------------------------------------- */}

      <Heading t1="See the magic. Try now" t2="" />

      {/* ----------------- try button------------------- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
        }}
      >
        <GradientButton text="Upload your image" />
      </Box>
    </Stack>
  );
};

export default Testimonials;

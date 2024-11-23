import { Stack } from "@mui/material";
import Heading from "./Heading";
import Slider from "./Slider";

const Exampler = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        padding: "4rem 0rem",
      }}
    >
      {/* ---------------------------------- heading------------------------------------- */}

      <Heading t1="Remove Background With High " t2="Quality And Accuracy" />

      {/* ----------------------------------  Slider------------------------------------- */}

      <Slider />
    </Stack>
  );
};

export default Exampler;

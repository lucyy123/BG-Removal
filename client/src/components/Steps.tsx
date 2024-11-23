import { Stack } from "@mui/material";
import Cards from "./Cards";
import Heading from "./Heading";

const Steps = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        padding: "5rem 0rem",
      }}
    >
      {/* ---------------------------------- heading------------------------------------- */}

      <Heading t1=" Steps to remove background " t2="image in seconds" />

      {/* ----------------------------------  cards------------------------------------- */}
      <Cards />
    </Stack>
  );
};

export default Steps;

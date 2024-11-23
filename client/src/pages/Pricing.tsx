import { Box, Button, Stack } from "@mui/material";
import Heading from "../components/Heading";
import PricingCards from "../components/PricingCards";

const Pricing = () => {
  return (
    <Stack sx={{
        mt:5,
        gap:2,
        height:"80vh"
    }}>
      {/* -------------------plans button--------------------- */}
      <Box textAlign={'center'}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "100px",
            paddingInline:"3rem",
            color:'rgba(81, 81, 81, 1)',
            cursor:"none"
          
          }}
        >
          our plans
        </Button>
      </Box>

      {/* -------------------Heading --------------------- */}
      <Heading t1="Choose the plan that’s right for you" t2="" myMarginTop={'1rem'}/>
      {/* -------------------Pricing  Cards--------------------- */}


<PricingCards/>

    </Stack>
  );
};

export default Pricing;

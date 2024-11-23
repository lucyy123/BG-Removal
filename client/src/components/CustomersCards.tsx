import { Stack } from "@mui/material";
import { testimonialsData } from "../utils/assets";
import Customer from "./Customer";

const CustomersCards = () => {
  return (
    <Stack direction={'row'} sx={{
        padding:'2rem 5rem',
        gap:"3rem",
        mt:5
    }}>
      {testimonialsData.map((ele) => (
        <Customer key={ele.id} data={ele} />
      ))}
    </Stack>
  );
};

export default CustomersCards;

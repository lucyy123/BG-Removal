import { Box, Stack, Typography } from "@mui/material";
import headerImage from "../assets/header_img.png";
import GradientButton from "./Button";

const Hero = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "1rem",
        width: "100%",
        marginTop: "3rem",
        alignItems:'center'
      }}
    >
      {/* ----------------------------- Heading-------------------------------- */}
      <Stack gap={2} >
        <Typography
          sx={{
            color: "rgba(53, 53, 53, 1)",
            fontSize: "3.5rem",
            fontWeight: "750",
            lineHeight: "3.5rem",
          }}
        >
          Remove the <br />{" "}
          <span className="bg-text" id="bgText">
            background
          </span>{" "}
          from images for free.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "rgba(81, 81, 81, 1)",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.
        </Typography>
        <Box>
          <GradientButton text="upload your image" />
        </Box>
      </Stack>

      {/* ----------------------------- Image---------------------------------- */}

      <Box textAlign={'end'}>
        <img
          src={headerImage}
          alt="left_hero_image"
          style={{
            height: "30rem",
            width: "30rem",
          }}
        />
      </Box>
    </div>
  );
};

export default Hero;

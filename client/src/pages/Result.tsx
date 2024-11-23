import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";

import originalImage from "../assets/image_w_bg.png";
import resultedImage from "../assets/image_wo_bg.png";
import GradientButton from "../components/Button";

const Result = () => {
  return (
    <Container
      maxWidth="lg"
      style={{
        paddingInline: "2rem",
        height: "80vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "2.5rem",
          borderRadius: "12px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            width: "100%",
            gap: "2rem",
            height: "auto",
          }}
        >
            {/* ---------------------------------- left side ----------------------------- */}
          <div
            style={{
              padding: "2rem 0rem",
            }}
          >
            {/* ---------------- title---------------------- */}
            <Typography
              sx={{
                color: "rgba(66, 64, 90, 1)",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
              mb={2}
            >
              Original
            </Typography>

            {/* ---------------- image---------------------- */}
            <Box>
              <img
                src={originalImage}
                alt="original_img"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              />
            </Box>
          </div>
          {/* ---------------------------------- right side ----------------------------- */}
          <div
            style={{
              padding: "2rem 0rem",
            }}
          >
            {/* ---------------- title---------------------- */}
            <Typography
              sx={{
                color: "rgba(66, 64, 90, 1)",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
              mb={2}
            >
              Background Removed
            </Typography>

            {/* ---------------- image---------------------- */}
            <Box>
              <img
                src={resultedImage}
                alt="original_img"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border:"2px solid rgba(186, 186, 186, 1)"
                }}
              />
            </Box>
          </div>

        </div>

<Stack direction={'row'} justifyContent={'end'} gap={2}>

<Button variant="outlined" sx={{
    border:"1px solid rgba(125, 72, 254, 1)",
    color:"rgba(125, 72, 254, 1)",

    textTransform: "none",
    padding: "0.75rem 1.7rem",
    borderRadius: "100px",
    display: "flex",
    transition: "transform 0.5s ease",
    ":hover": {
      transform: "scale(1.05)",
    },


}}>Try another image</Button>
<GradientButton text="Download image" isIcon={false}/>

</Stack>


      </Paper>
    </Container>
  );
};

export default Result;

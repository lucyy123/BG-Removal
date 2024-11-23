import { SvgIconComponent } from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";

type Props = {
  details: {
    id: number;
    title: string;
    text: string;
    iconName: SvgIconComponent;
  };
};

const MyCards = ({ details }: Props) => {
  let directionOfGradient;

  if (details.title.includes("Download")) {
    directionOfGradient = "to top";
  } else {
    directionOfGradient = "to bottom";
  }

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        padding: "1.5rem",
        transition: 'transform 0.5s ease',
        ":hover":{
          transform: 'scale(1.05)'
        }
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
        }}
      >
        {/* --------------------- icon-------------------------- */}
        <Box width={"20%"}>
          <Box
            sx={{
              height: "2.75rem",
              width: "2.75rem",
              borderRadius: "12px",
              color: "white",
              background: `linear-gradient(${directionOfGradient}, rgba(118, 73, 255, 1), rgba(255, 76, 246, 1))`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <details.iconName
              sx={{
                fontWeight: "bold",
              }}
            />
          </Box>
        </Box>

        {/* --------------------- Heading-------------------------- */}
        <Stack flex={1} mt={1} gap={1}>
          <Typography
            sx={{
              fontSize: "1.4rem",
              color: "rgba(0, 0, 0, 1)",
              fontWeight: "bold",
            }}
          >
            {details.title}
          </Typography>
          {/* --------------------- Sub Heading-------------------------- */}
          <Typography
            sx={{
              color: "rgba(124, 124, 124, 1)",
              fontSize: "0.8rem",
            }}
          >
            {details.text}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default MyCards;

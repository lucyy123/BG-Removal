import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";

type Props = {
  data: {
    id: number;
    text: string;
    author: string;
    image: string;
    jobTitle: string;
  };
};
const Customer = ({ data }: Props) => {
  return (
    <Paper elevation={3} sx={{ padding: "2rem",     transition: 'transform 0.5s ease',
      ":hover":{
        transform: 'scale(1.05)'
      }}}>
      <Stack gap={2}>
        {/* ---------------------- comma logo------------- */}
        <img
          src="/Youtubeusername.png"
          alt="comma_image"
          style={{
            width: "1rem",
            height: "1rem",
          }}
        />

        {/* ---------------------- reviews------------- */}

        <Typography
          sx={{
            color: "rgba(121, 116, 132, 1)",
            // lineHeight: "1.8rem",
          }}
        >
          {data.text}
        </Typography>

        {/* ---------------------- user avatar+ userName + profession------------- */}

        <Stack direction={"row"}>
          <Box
            sx={{
              // width: "20%",
              marginRight: "1rem",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Avatar src={data.image} alt="user_image" />
          </Box>

          <Stack flex={1}>
            <Typography
              sx={{
                color: "rgba(75, 68, 90, 1)",
                fontSize: "1.2rem",
                fontWeight: "600",
              }}
            >
              {data.author}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                textTransform: "uppercase",
              }}
            >
              {data.jobTitle}{" "}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Customer;

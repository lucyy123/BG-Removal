import { Avatar, Stack, Typography } from "@mui/material";
import { assets } from "../utils/assets";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        marginTop: "3rem",
        marginBottom: "1rem",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
          marginRight: "auto",
        }}
      >
        <img
          src="/logo.svg"
          alt="logo"
          style={{
            width: "10rem",
          }}
        />

        <Typography
          sx={{
            color: "rgba(121, 116, 132, 1)",
            padding: "0rem 2rem",

            borderLeft: "1px solid rgba(157, 157, 157, 1)",
            fontWeight: "400",
          }}
        >
          All right reserved. Copyright @bg removal
        </Typography>
      </Stack>

      <Stack direction={"row"} gap={2}>
        <Avatar
          sx={{
            transition: "transform 0.5s ease",
            ":hover": {
              transform: "scale(1.2)",
            },
          }}
          src={assets.facebook_icon}
          alt="facebook_img"
        />
        <Avatar
          sx={{
            transition: "transform 0.5s ease",
            ":hover": {
              transform: "scale(1.2)",
            },
          }}
          src={assets.twitter_icon}
          alt="twitter_img"
        />
        <Avatar
          sx={{
            transition: "transform 0.5s ease",
            ":hover": {
              transform: "scale(1.2)",
            },
          }}
          src={assets.google_plus_icon}
          alt="google_img"
        />
      </Stack>
    </footer>
  );
};

export default Footer;

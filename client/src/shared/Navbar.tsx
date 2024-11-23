import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { ArrowRightAltOutlined } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  console.log("user:", user);

  return (
    <Box
      sx={{
        display: "flex",
        padding: "1rem 0rem",
      }}
    >
      {/* --------------------------logo------------------- */}
      <Link
        to={"/"}
        style={{
          marginRight: "auto",
        }}
      >
        <img
          src="/logo.svg"
          alt="logo"
          style={{
            width: "11rem",
            // marginRight: "auto",
          }}
        />
      </Link>

      {/* ---------------------------- Getting Started + user icon----------------- */}

      <Stack direction={"row"}>
        {/* -------------------------- user name + user avatar--------------------------------- */}

        {isSignedIn ? (
          <UserButton/>
        ) : (
          <Button
            sx={{
              bgcolor: "rgba(49, 49, 49, 1)",
              textTransform: "none",
              borderRadius: "100px",
              color: "white",
              paddingInline: "2rem",
            }}
            onClick={() => openSignIn()}
          >
            Get started{" "}
            <ArrowRightAltOutlined
              sx={{
                color: "white",
                marginInline: "0.2rem",
              }}
            />{" "}
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default Navbar;

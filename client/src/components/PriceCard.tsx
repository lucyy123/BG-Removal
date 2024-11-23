import { Button, Paper, Stack, Typography } from "@mui/material";

type Props = {
  data: {
    id: string;
    price: number;
    credits: number;
    desc: string;
  };
};

const PriceCard = ({ data }: Props) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "2.5rem",
        borderRadius:"10px",
        mt:2,
        transition: 'transform 0.5s ease',
        ":hover":{
          transform: 'scale(1.05)'
        },
        width:'18.5rem'
      }}
    >
      <Stack>
        {/* -------------------------------logo---------------------- */}
        <img
          src="/logo_icon.svg"
          alt="logo"
          style={{
            width: "2rem",
            height: "2rem",
          }}
        />
        {/* -------------------------------plan Name---------------------- */}
        <Typography
          sx={{
            color: "rgba(81, 81, 81, 1)",
            fontSize: "1.2rem",
            fontWeight: "700",
            mt: 1,
          }}
        >
          {" "}
          {data.id}
        </Typography>

        {/* -------------------------------discription---------------------- */}
        <Typography
          sx={{
            color: "rgba(81, 81, 81, 1)",
            fontSize: "0.85rem",
            mb: 2,
          }}
        >
          {" "}
          {data.desc}
        </Typography>
        {/* -------------------------------price---------------------- */}

        <Typography
          sx={{
            color: "rgba(81, 81, 81, 1)",
            fontSize: "2.5rem",
            fontWeight: "600",
            mb: 3,
          }}
        >
          ${data.price}
          <span
            style={{
              color: "rgba(81, 81, 81, 1)",
              fontSize: "0.85rem",
              marginLeft: "0.3rem",
            }}
          >
            / {data.credits} credits
          </span>
        </Typography>

        {/* -------------------------------Button---------------------- */}

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            borderRadius: "10px",
            color: "rgba(255, 255, 255, 1)",
            fontSize: "0.85rem",
            bgcolor: "rgba(38, 38, 38, 1)",
            // paddingInline:"2rem"
          }}
        >
          Purchase
        </Button>
      </Stack>
    </Paper>
  );
};

export default PriceCard;

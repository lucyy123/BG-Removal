import { FileUploadOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";

type Props = {
  text: string;
  isIcon?: boolean;
};

const GradientButton = ({ text, isIcon = true }: Props) => {
  return (
    <Button
      sx={{
        background:
          "linear-gradient(to right, rgba(118, 73, 255, 1), rgba(255, 76, 246, 1))",
        textTransform: "none",
        padding: "0.75rem 1.7rem",
        borderRadius: "100px",
        display: "flex",
        color: "rgba(255, 255, 255, 1)",
        transition: "transform 0.5s ease",
        ":hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      {isIcon && (
        <FileUploadOutlined
          sx={{
            marginInline: "0.23rem",
          }}
        />
      )}

      {text}
    </Button>
  );
};

export default GradientButton;

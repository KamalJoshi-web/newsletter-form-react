import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import TickIcon from "../assets/icon-success.svg";

const ThanksCard = ({ emailSharing, setEmailSharing }) => {
  const handleEmail = () => {
    setEmailSharing("");
  };
  return (
    <Stack
      maxWidth="300px"
      sx={{
        padding: { lg: "35px", md: "8px", xs: "38px" },
        height: { lg: "initial", md: "initial", xs: "100vh" },
        justifyContent: { lg: "initial", md: "initial", xs: "center" },
      }}
      gap={2}
    >
      <img
        src={TickIcon}
        alt="Success Icon"
        style={{ alignSelf: "flex-start" }}
      />
      <Typography
        variant="h3"
        color="hsl(234, 29%, 20%)"
        fontWeight="700"
        lineHeight={1.2}
      >
        Thanks for subscribing!
      </Typography>
      <Typography
        fontSize="13px"
        color="hsl(234, 29%, 20%)"
        sx={{ mb: { lg: "20px", md: "16px", xs: "200px" } }}
      >
        A confirmation email has been sent to{" "}
        <span style={{ fontWeight: "700" }}>{emailSharing}</span>. Please open
        it and click the button inside to confirm your subscription.
      </Typography>
      <Button
        size="large"
        sx={{
          bgcolor: "hsl(234, 29%, 20%)",
          color: "white",
          textTransform: "none",
          ":hover": {
            bgcolor: "hsl(4, 100%, 67%)",
            boxShadow:
              "rgba(17, 17, 26, 0.1) 0px 1px 0px, hsl(4, 100%, 67%) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;",
          },
        }}
        onClick={handleEmail}
      >
        Dismiss message
      </Button>
    </Stack>
  );
};

export default ThanksCard;

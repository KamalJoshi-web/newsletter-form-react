import React from "react";
import {
  Box,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import TickMark from "../assets/icon-list.svg";
import { useForm } from "react-hook-form";
import SignUpDesk from "../assets/sign-up-desktop.svg";
import SignUpMob from "../assets/sign-up-mobile.svg";

const SubsCard = ({ emailSharing, setEmailSharing }) => {
  const liststext = [
    { text: "Product discovery and building what matters" },
    { text: "Measuring to ensure updates are a success" },
    { text: "And much more!" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const emailInfo = (info) => {
    setEmailSharing(info.email);
  };
  return (
    <Stack
      maxWidth="850px"
      sx={{
        flexDirection: { lg: "row", md: "row", xs: "column-reverse" },
        p: { lg: "24px", md: "16px", xs: "0" },
      }}
      alignItems="center"
      justifyContent="center"
      gap={5}
    >
      <Stack gap={2.5} p={2}>
        <Typography
          variant="h3"
          color="hsl(234, 29%, 20%)"
          fontWeight="700"
          lineHeight={1.2}
        >
          Stay updated!
        </Typography>
        <Typography fontSize="16px" color="hsl(234, 29%, 20%)" lineHeight={1.2}>
          Join 60,000+ product managers receiving monthly updates on:
        </Typography>

        {liststext.map((item, index) => (
          <ListItem key={index} sx={{ p: "0", my: "-5px" }}>
            <ListItemIcon sx={{ minWidth: "36px", minHeight: "10px" }}>
              <img src={TickMark} alt="TickMark" />
            </ListItemIcon>
            <ListItemText sx={{ color: "hsl(234, 29%, 20%)" }}>
              {item.text}
            </ListItemText>
          </ListItem>
        ))}

        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mb={-1}
        >
          <Typography
            fontSize="14px"
            color="hsl(234, 29%, 20%)"
            fontWeight="600"
          >
            Email address
          </Typography>
          {!!errors?.email ? (
            <Typography
              fontSize="14px"
              color="hsl(4, 100%, 67%)"
              fontWeight="600"
            >
              Valid Email Required
            </Typography>
          ) : null}
        </Stack>
        <Stack component="form" gap={2} onSubmit={handleSubmit(emailInfo)}>
          <TextField
            variant="outlined"
            placeholder="email@company.com"
            size="large"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i,
            })}
            error={!!errors?.email}
            sx={
              !!errors?.email
                ? {
                    input: {
                      bgcolor: "#ff00002b",
                      color: "red",
                      fontWeight: "500",
                    },
                  }
                : null
            }
          />
          <Button
            type="submit"
            size="large"
            sx={{
              py: "10px",
              bgcolor: "hsl(234, 29%, 20%)",
              color: "white",
              textTransform: "none",
              ":hover": {
                bgcolor: "hsl(4, 100%, 67%)",
                boxShadow:
                  "rgba(17, 17, 26, 0.1) 0px 1px 0px, hsl(4, 100%, 67%) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;",
              },
            }}
          >
            Subscribe to monthly newsletter
          </Button>
        </Stack>
      </Stack>
      <Box
        component="img"
        sx={{
          content: {
            lg: `url(${SignUpDesk})`,
            md: `url(${SignUpDesk})`,
            xs: `url(${SignUpMob})`,
          },
          ":hover": {
            bgcolor: "hsl(4, 100%, 67%)",
          },
          width: { lg: "initial", md: "initial", xs: "100%" },
        }}
        alt="signupicon"
      />
    </Stack>
  );
};

export default SubsCard;

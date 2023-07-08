import React, { useState } from "react";
import { Box } from "@mui/material";
import SubsCard from "./SubsCard";
import ThanksCard from "./ThanksCard";
const NewsLetter = () => {
  const [emailSharing, setEmailSharing] = useState("");
  return (
    <Box
      bgcolor="hsl(0, 0%, 100%)"
      sx={{ borderRadius: { lg: "15px", md: "10px", xs: "0" } }}
    >
      {emailSharing === "" ? (
        <SubsCard
          emailSharing={emailSharing}
          setEmailSharing={setEmailSharing}
        />
      ) : (
        <ThanksCard
          emailSharing={emailSharing}
          setEmailSharing={setEmailSharing}
        />
      )}
    </Box>
  );
};

export default NewsLetter;

import React from "react";
import { Stack } from "@mui/material";
import NewsLetter from "./components/NewsLetter";
import "./App.css";
const App = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="hsl(234, 29%, 20%)"
    >
      <NewsLetter />
    </Stack>
  );
};

export default App;

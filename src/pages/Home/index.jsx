import { Box, Stack } from "@mui/material";
import React from "react";

function Home(props) {
  return (
    <Box>
      <Stack direction={"row"} bgcolor={"secondary.light"} py={2}>
        slide here
      </Stack>
      <Box>
        Home
      </Box>
    </Box>
  );
}

export default Home;

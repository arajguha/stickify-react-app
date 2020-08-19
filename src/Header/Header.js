import React from "react";
import { AppBar, Typography } from "@material-ui/core";

const header = () => {
  return (
    <AppBar color="secondary" style={{ letterSpacing: "3px", padding: "4px" }}>
      <Typography variant="h4">Stickify</Typography>
    </AppBar>
  );
};

export default header;

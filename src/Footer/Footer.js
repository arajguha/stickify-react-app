import React from "react";
import { Typography, Link, withStyles } from "@material-ui/core";

const styles = {
  footer: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%"
  }
};

const footer = (props) => {
  const { classes } = props;
  return (
    <div className={classes.footer}>
      <Typography variant="subtitle1" color="secondary">
        v 1.0.0
      </Typography>
    </div>
  );
};

export default withStyles(styles)(footer);

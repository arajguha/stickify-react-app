import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  withStyles
} from "@material-ui/core";

const styles = {
  button: {
    marginTop: "10px",
    marginBottom: "3px"
  }
};

const stickyCard = (props) => {
  const { classes } = props;
  return (
    <Grid item xs={12} sm={3}>
      <Card>
        <CardContent>
          <Typography variant="subtitle1" color="secondary" align="center">
            {props.text}
          </Typography>
          <Button
            className={classes.button}
            variant="outlined"
            color="secondary"
            onClick={props.deleteNote}
          >
            Remove
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(stickyCard);

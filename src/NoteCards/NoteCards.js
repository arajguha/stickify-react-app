import React from "react";
import { Grid, Typography } from "@material-ui/core";
import StickyCard from "./StickyCard/StickyCard";
import { withStyles } from "@material-ui/core/styles";

/*
const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2)
  }
}));
*/

const styles = (theme) => ({
  card: {
    padding: theme.spacing(2)
  }
});

const noteCards = (props) => {
  let cards = props.notes.map((note) => {
    return (
      <StickyCard
        key={note.id}
        text={note.text}
        deleteNote={() => props.deleteNote(note.id)}
      />
    );
  });
  if (cards.length === 0) {
    cards = (
      <Grid item xs={12}>
        <Typography variant="h5" color="secondary" align="center">
          Start creating Notes
        </Typography>
      </Grid>
    );
  }
  return (
    <div>
      <Grid container spacing={3}>
        {cards}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(noteCards);

import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  withStyles
} from "@material-ui/core";

const styles = {
  card: {
    margin: "70px auto",
    width: "50%"
  },
  button: {
    margin: "15px auto",
    marginBottom: "5px"
  }
};

const inputCard = (props) => {
  const { classes } = props;

  const updateState = (e) => {
    if (e) e.preventDefault();
    const input = props.text.trim();
    if (input === "") {
      alert("invalid note");
      return;
    }

    if (props.notes.filter((note) => note.text === input).length !== 0) {
      alert("note already exists");
      return;
    }

    const noteObj = {
      id: input,
      text: input
    };
    const newNotes = [...props.notes, noteObj];
    props.setNotes(newNotes);
    console.log(newNotes);
  };

  return (
    <Container fixed>
      <Card className={classes.card}>
        <CardContent>
          <form onSubmit={updateState}>
            <TextField
              variant="outlined"
              color="secondary"
              label="Enter Here"
              required
              onChange={(e) => props.setText(e.target.value)}
              value={props.inputText}
            />
            <CardActions>
              <Button
                size="large"
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={() => updateState(props.inputText)}
              >
                STICK IT
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default withStyles(styles)(inputCard);

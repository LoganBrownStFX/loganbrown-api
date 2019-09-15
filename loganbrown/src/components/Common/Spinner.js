import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  root: {
    color: "#707070"
  }
});

function Spinner() {
  const classes = useStyles();
  return <CircularProgress className={classes.root} />;
}

export default Spinner;

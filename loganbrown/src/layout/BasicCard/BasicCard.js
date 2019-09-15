import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#404040",
    height: "25%",
    width: "45%"
  }
});

function BasicCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className="content flex-container-column flex-center">
        {props.children}
      </div>
    </Card>
  );
}

export default BasicCard;

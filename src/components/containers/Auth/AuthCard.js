import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styles from "./styles/authcard-styles";

function AuthCard(props) {
  const {classes} = props;

  return (
    <Card className={classes.card} >
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  );
}

AuthCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AuthCard);

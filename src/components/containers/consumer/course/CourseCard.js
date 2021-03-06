import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styles from "./styles/coursecard-styles";

function CourseCard(props) {
  const {classes} = props;

  return (
    <Card className={classes.card} >
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  );
}

CourseCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CourseCard);

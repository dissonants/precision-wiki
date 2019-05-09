import React, {Component} from "react";
import SimpleCard from "./SimpleCard";
import Grid from "@material-ui/core/Grid";
import UploadButton from "./UploadButton";

class Upload extends Component {
  render() {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={3}>
          <SimpleCard>
            <UploadButton />
          </SimpleCard>
        </Grid>
      </Grid>
    );
  }
}

export default Upload;

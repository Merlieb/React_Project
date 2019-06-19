import React from "react";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class SectionJavascriptBis extends React.Component {
  anchorElLeft = null;
  anchorElTop = null;
  anchorElBottom = null;
  anchorElRight = null;
  constructor(props) {
    super(props);
    this.state = {
      classicModal: false,
      openLeft: false,
      openTop: false,
      openBottom: false,
      openRight: false
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  handleClosePopover(state) {
    this.setState({
      [state]: false
    });
  }
  handleClickButton(state) {
    this.setState({
      [state]: true
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>Reservation</h2>
          </div>
         
              <GridItem xs={12} sm={12} md={12}>
                <div className={classes.title}>
                  <h3>Datetime Picker</h3>
                </div>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <InputLabel className={classes.label}>
                      Datetime Picker
                    </InputLabel>
                    <br />
                    <FormControl fullWidth >
                      <Datetime id = "place1"
                        inputProps={{ placeholder: "Check in" }}
                      />
                    </FormControl>
                  </GridItem>
                </GridContainer>
              </GridItem>
           
              <GridItem xs={12} sm={12} md={12}>
                <div className={classes.title}>
                  <h3>Datetime Picker</h3>
                </div>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <InputLabel className={classes.label}>
                      Datetime Picker
                    </InputLabel>
                    <br />
                    <FormControl fullWidtidh  >
                      <Datetime id = "Place2"
                        inputProps={{ placeholder: "Check out" }}
                      />
                    </FormControl>
                  </GridItem>
                </GridContainer>
              </GridItem>
              <div>
              <Button >take a date</Button>
              </div>
          </div>
        </div>
     
    );
  }
}

export default withStyles(javascriptStyles)(SectionJavascriptBis);

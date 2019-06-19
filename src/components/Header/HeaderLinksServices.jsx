/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinksServices({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Companies"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://www.thalasso-saintmalo.com/fr/soins-spa/"
              target="_blank"
              className={classes.dropdownLink}
            >
              LE SPA DES THERMES
            </a>
            
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
            <Button type="button" color= "transparent" onClick = {()=>props.history.push("/")}>
            Home
            </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button type="button" color= "transparent" onClick = {()=>props.history.push("/landing-page-bis")}>
            All Inclusive
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button type="button" color= "transparent" onClick = {()=>props.history.push("/reservations")}>
            Reservations
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/malou__beli/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinksServices);

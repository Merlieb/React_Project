import React from "react";

import Header from "components/Header/Header.jsx";

import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import HeaderLinksHome from "../components/Header/HeaderLinksHome.jsx";
import Parallax from "../components/Parallax/Parallax.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import WorkSectionBis from "../views/LandingPage/Sections/WorkSectionBis";

class Welcome extends React.Component{
render() {
  const { classes, ...rest } = this.props;
    return (       
        <div>
          <Header
          brand="Merlie Hotel"
          rightLinks={<HeaderLinksHome history={this.props.history}  />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
           <Parallax image={require("assets/img/deca_home.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Merlie Hotel</h1>
                  <h3 className={classes.subtitle}>
                  The quiet and the rest will be on the menu, in the middle of a paradisiacal tropical climate of about 30° on average and accompanied by the warmth of the Haitians and the magic of their gastronomy.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

            <headerStyle />
            <WorkSectionBis />
        </div>
    );
    }

}

export default withStyles(componentsStyle)(Welcome);
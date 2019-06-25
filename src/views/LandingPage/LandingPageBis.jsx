import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import WorkSectionTriple from "./Sections/WorkSectionTriple.jsx";
import TeamSectionbis from "./Sections/TeamSectionbis.jsx";
import HeaderLinksAllInclusive from "../../components/Header/HeaderLinksAllInclusive.jsx";
import TeamSectionTriple from "./TeamSectionTriple.jsx";
import WorkSectionBis from "./Sections/WorkSectionBis.jsx";

const dashboardRoutes = [];

class LandingPageBis extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Merlie Hotel"
          rightLinks={<HeaderLinksAllInclusive history={this.props.history} />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/ladinn.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>A more beautiful vacancy with our plan ALL INCLUSIVE</h1>
                <h4>
                Discover the magic of the all inclusive Merlie Hotel,
                 a solution to spend the best holidays possible.
                  Enjoy your rest time at the hotel and your favorite destination.
                 We will make your stay a memorable experience by making you enjoy our services and entertainment.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=9T4_xtC_dgA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            {/* <ProductSection /> */}
            <TeamSectionbis />
            <TeamSectionTriple/>
            <WorkSectionBis />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPageBis);

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/visiteg.jpg";
import team2 from "assets/img/faces/avion.jpg";
import team3 from "assets/img/faces/festival.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Our Plan</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                Entertainment
                  <br />
                  <small className={classes.smallTitle}></small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                  At Merlie Hotel, there is entertainment for everyone. 
                  We offer you a wide range of activities for all tastes and for all ages:
                  aerobics, tennis, diving classes, dance, 
                  non-motorized water sports and all the
                  recreational activities to make your vacation unforgettable.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                Tourist
                  <br />
                  <small className={classes.smallTitle}></small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Air tickets, 
                    transfers,
                    Accommodation,
                    Unlimited restoration,
                    Buffet and snacks,
                    Specialized restaurants,
                    Unlimited drinks and liqueurs,
                    Shows every day,
                    The most beautiful beaches,
                    Open bar,
                    Recreational activities,
                    Non-motorized water sports.
                   
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Festivity
                  <br />
                  {/* <small className={classes.smallTitle}>Model</small> */}
                </h4>
                <CardBody>
                  <p className={classes.description}>
                  With us, days and nights are always full of joy.
                  Enjoy our casinos, live music, reggae or merengue bars,
                  mariachis, games and contests. Later, a meeting in the discotheque
                  at the open bar and the DJ who dances the track until the early morning.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);

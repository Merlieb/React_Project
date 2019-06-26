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

import team1 from "assets/img/faces/plani.jpg";
import team2 from "assets/img/faces/home1.jpg";
import team3 from "assets/img/faces/piscine-et-plage.jpg";

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
        {/* <h2 className={classes.title}>Our Plan</h2> */}
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                    Guided tour
                  <br />
                  <small className={classes.smallTitle}></small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                  in partnership with the Ministry of Tourism,
                  we will guide you on our place and also 
                  on the tourist sites of the country.
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
                Accommodation
                  <br />
                  <small className={classes.smallTitle}></small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                  
                  Each of our rooms is equipped with all the necessary amenities
                  to make your stay pleasant and make you live a unique experience of relaxation,
                  rest and comfort. It's time to give you the rest you deserve!
                   
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
                  Beaches and Swimming Pools
                  <br />
                  {/* <small className={classes.smallTitle}>Model</small> */}
                </h4>
                <CardBody>
                  <p className={classes.description}>
                  In our hotels, you will know the most beautiful beaches 
                  and swimming pools for children and adults
                  synonymous with rest and relaxation,
                  where you will be able to fully enjoy
                  magnificent landscapes and views that you will never forget.
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

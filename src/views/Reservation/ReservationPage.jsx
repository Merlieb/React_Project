import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/home1.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import reservationPageStyle from "assets/jss/material-kit-react/views/reservationPage.jsx";
import WorkSectionTriple from "../LandingPage/Sections/WorkSectionTriple";
import HeaderLinksServices from "../../components/Header/HeaderLinksServices";

class ReservationPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Merlie Hotel"
          rightLinks={<HeaderLinksServices history={this.props.history} />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/home6.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h1 className={classes.title}>Reservation</h1>
{/*                       
                      <h4>DESIGNER</h4> 
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button> */}
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
    <div>
        <form>
            <h4>INCLUDES</h4>
            <ul>
            <li>Accommodation</li>
            <li>Breakfast and buffet lunch.</li> 
            <li>Meals a la carte in a specialized restaurants (must be booked in advance).</li>
            <li>Snacks.</li>
            <li>Alcoholic and non-alcoholic drinks locally produced at will.</li>
            <li>Recreational activities for adults and children.</li>
            <li>Shows and live music.</li>
            <li>Non motorized water sports</li>
            <li>Tourist tax included</li>
           </ul>
           <hr/>

           <h4>NOT INCLUDED</h4>
           <ul>
            <li>Transport</li>
            <li>Phone calls</li>
            <li>Laundry</li>
            <li>Safe</li>
            <li>Medical services</li>
            <li>Pharmaceuticals</li>
            <li>Excursions and other expenses not specified in the program</li>
            </ul>
            <hr/>

            <h4>COMMERCIAL CONDITIONS</h4>
            <ul>
              <li>Minimum stay of 2 nights.</li>
              <li>Package valid per person per night in a double room.</li>
              <li>Children's rates apply for children from 2 to 11 years sharing a minimum of a double room with 2 adults or a single room with an adult.</li>
              <li>Package includes tourist taxes and hotel insurance.</li>
              <li>Check In: 15:00</li>
              <li>Check Out: 13:00</li>
              <li>Arrivals before check-in time or check-outs after check-out time will be subject to an additional charge at the discretion of the hotel.</li>
              <li>Rates are indicative and subject to change.</li>
            </ul>
            <hr/>
            For more information contact us:
            </form>
            </div>       
           </div>
          </div>
          <WorkSectionTriple />
          </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withStyles(reservationPageStyle)(ReservationPage);


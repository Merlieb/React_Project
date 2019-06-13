import React from "react";
import Button from "../components/CustomButtons/Button.jsx";
import SectionCarousel from "../views/Components/Sections/SectionCarousel.jsx";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "../components/Header/HeaderLinks.jsx";
import Parallax from "../components/Parallax/Parallax.jsx";
import LandingPage from "../views/LandingPage/LandingPage.jsx";
import { loadOptions } from "@babel/core";
class Welcome extends React.Component{
render() {

    return (       
        <div>
        <Button type="button" color="warning"onClick = {()=>this.props.history.push("/reservation-page")}>
                Story
              </Button>
              <Button type="button" color="warning" onClick = {()=>this.props.history.push("/landing-page")}>
                About Us
              </Button>
              <Button type="button" color="warning" onClick = {()=>this.props.history.push("/reservations")}>
              Reservations
              </Button>
            <SectionCarousel />
            <headerStyle />
        </div>
    );
    }

}

export default Welcome;
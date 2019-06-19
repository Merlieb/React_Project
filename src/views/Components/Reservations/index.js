import React from "react";
import reservations from '../data/Reservations';
import Show from "./Show";
import styled from 'styled-components';
import Order from "./Order";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import reservationsPageStyle from "../../../assets/jss/material-kit-react/views/reservationsPage.jsx";
import image from "assets/img/Deca.jpg";
import WorkSectionTriple from "../../LandingPage/Sections/WorkSectionTriple";
import HeaderLinksReservations from "../../../components/Header/HeaderLinksReservations";
import WorkSectionBis from "../../LandingPage/Sections/WorkSectionBis";
import WorkSection from "../../LandingPage/Sections/WorkSection";
const TableStyled = styled.table`
    width: 70%;
    box-sizing: border-box;
    background-color: white;
    margin-top: 75px;
    margin-bottom: auto;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #bbbb;
    border-collapse: collapse;
    text-align: center;
    th {
        background-color: #000099
        color:white;
    }
    td,th{
        border: 1px solid tr;
        border-collapse: collapse;
    }
    
    h3{
        font-family: "Times New Roman", Times, serif;
    }
    h4{
        color:blue;
        font-family: Arial, Times, serif;
    }
    h5{
        color:#33292f;
    }
    h6{
        color:green;
        font-weight: bold;
    }
    
`


class Reservations extends React.Component {
    state = {
        order: {}
    };

    addToOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 ||1 ;
        this.setState({order});
    } 

    render () {
        const { classes, ...rest } = this.props;
        return (
            <div>
                <Header
                    absolute
                    color="transparent"
                    brand="Merlie Hotel"
                    rightLinks={<HeaderLinksReservations history={this.props.history} />}
                    {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
                >
            <div className={classes.container}>
            <TableStyled> 
                     <tr>
                        <th><h3>Image</h3></th>
                        <th><h3>Name</h3></th>
                        <th><h3>Description</h3></th> 
                        <th><h3>Price</h3></th>
                        <th><h3>Action</h3></th>
                    </tr>
            
                     {Object.keys(reservations).map((reservationkey,index) => <Show key={index} reservationkey ={reservationkey} details={reservations[reservationkey]} addToOrder={this.addToOrder}/>)}
                </TableStyled>
           
              <Order reservations= {this.reservations} order={this.state.order}/>
              <WorkSectionTriple />
            </div>
        </div>
      </div>        
            
       )
    }
}

export default withStyles(reservationsPageStyle)(Reservations);
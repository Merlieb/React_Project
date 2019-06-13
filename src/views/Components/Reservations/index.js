import React from "react";
import reservations from '../data/Reservations';
import Show from "./Show";
import styled from 'styled-components';
import Order from "./Order";
 

const TableStyled = styled.table`
    width: 70%;
    box-sizing: border-box;
    background-color: white;
    margin-top: 3000px;
    margin:auto;
    border: 1px solid #bbbb;
    border-collapse: collapse;
    th {
        background-color: #000099
        color:white;
    }
    td,th{
        border: 1px solid #bbbb;
        border-collapse: collapse;
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
    
        return (
            <div>
              <TableStyled> 
                     <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Desc</th> 
                        <th>Price</th>
                    </tr>
            
                     {Object.keys(reservations).map((reservationkey,index) => <Show key={index} reservationkey ={reservationkey} details={reservations[reservationkey]} addToOrder={this.addToOrder}/>)}
                </TableStyled>
           
              <Order reservations= {this.reservations} order={this.state.order}/>
            </div>
            
       )
    }
}

export default Reservations;
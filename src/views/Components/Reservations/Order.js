import React from "react";
import reservations from "../data/Reservations";


class Order extends React.Component{

    renderOrder = key => {
        const reserve = this.props.reserve[key];
        const count = this.Order;
        return (
            <li>
            {count} {reserve.name}
            {count * reserve.price}
            </li>
        );
    };

    render() {
        const { order } = this.props;
        const orderKeys = Object.keys(order);

        const total = orderKeys.reduce((prevTotal, key) =>{
            const  count = order[key];
            const reservation = reservations[key];
            const isAvailable = reservation && reservation.status === 'available';
            if(isAvailable){
                return prevTotal + (count * reservation.price);
            }
            return prevTotal;
        }, 0);

        return ( 
                <div>
                    <h2>Order</h2>
                    {orderKeys.map(reservationKey => {
                        return (
                            <div>
                                <h3>{reservations[reservationKey].name}</h3>
                    <p>{reservations[reservationKey].price} US $ &times; {order[reservationKey]}</p>
                            </div>
                        )
                    })}
                    <hr/>
                  <h2>  Total : {total} US$</h2>
                </div>
        )
        
    }
    
    }
    
    export default Order;

  
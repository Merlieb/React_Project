import React from "react";
import Button from "components/CustomButtons/Button.jsx";


class Show extends React.Component{
    render() {
        let {name, image, price, desc, status} = this.props.details;
        const isAvailable = status === 'available';
        return ( 
                   
                    <tr>
                        <td><img width={150} src ={image} /></td>
                        <td><h4>{name}</h4></td>
                        <td><h5>{desc}</h5></td>
                        <td><h6>{price}</h6></td>
            
                        <Button color="facebook"  disabled={!isAvailable} onClick={() => (this.props.addToOrder(this.props.reservationkey))}>{isAvailable ? "Add To Order" : "Solde out!"}</Button>
                    </tr> 
        )
        
    }
    
    }
    
    export default Show;
import React from "react";


class Show extends React.Component{
    render() {
        let {name, image, price, desc, status} = this.props.details;
        const isAvailable = status === 'available';
        return ( 
                   
                    <tr>
                        <td><img width={50} src ={image} /></td>
                        <td>{name}</td>
                        <td>{desc}</td>
                        <td>{price}</td>
            
                        <button disabled={!isAvailable} onClick={() => (this.props.addToOrder(this.props.reservationkey))}>{isAvailable ? "Add To Order" : "Solde out!"}</button>
                    </tr> 
        )
        
    }
    
    }
    
    export default Show;
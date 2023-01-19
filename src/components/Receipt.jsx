import { useState } from "react"

const Receipt = ({ selectedItemList, total }) => {
    function createOrder(){
        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'items': selectedItemList}),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
    }

    
    
    return (
        <div>
            Order
            <ul>
                {
                    selectedItemList.map((item) => {
                        return (
                            <li onClick = {()=>addToTotal(item.price)}>    
                                {item.name}: ${item.price}
                            </li>
                        )
                    })
                }
            </ul>
            <p>Total: ${total}</p>
            <button onClick = {createOrder}>Create Order</button>
        </div>
    )
}

export default Receipt
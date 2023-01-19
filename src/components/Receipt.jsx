import { useState } from "react"

const Receipt = ({ selectedItemList, total, currentTable, clearOrder, clearTotal }) => {
    function createOrder(){
        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'items': selectedItemList, 'table': currentTable}),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            clearOrder([])
            clearTotal()
    }

    
    
    return (
        <div className="receipt-container">
            <h3>Order for table: {currentTable}</h3>
            <div className="receipt-content">
                <ul className="receipt-item-list">
                    {
                        selectedItemList.map((item) => {
                            return (
                                <li className="receipt-item">    
                                    {`${item.name}:  $${item.price}`}
                                    <hr></hr>
                                </li>
                               
                            )
                        })
                    }
                </ul>
            </div>
            <h2>Total: ${total}</h2>
            <button onClick = {createOrder} className="create-order-btn">Create Order</button>
        </div>
    )
}

export default Receipt
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
        <div>
            Order for table: {currentTable}
            <ul>
                {
                    selectedItemList.map((item) => {
                        return (
                            <li>    
                                {`${item.name}:  $${item.price}`}
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
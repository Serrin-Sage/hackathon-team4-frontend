import {useState, useEffect} from 'react'

const MenuItemTile = ({item}) => {

    const [instructions, setInstructions] = useState('')

    function handleInstructions(e){
        setInstructions(e.target.value)
    }

    function addItemToOrder(){
        fetch('http://localhost:3000/receipt_items', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'order_id':'', 'item_name':item.name, 'item_price': item.price, 'instructions': instructions}),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            })
    }
    return (
        <div>
            <button>
            <p>{item.name}</p>
            <p>{item.price}</p>
            </button>
            <input type = 'text' value = {instructions} onChange = {handleInstructions}></input>
        </div>
    )
}

export default MenuItemTile
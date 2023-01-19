import { useState, useEffect } from "react"

const Beverages = ({ setSelectedItemList, addToTotal }) => {
    const [beverageList, setBeverageList] = useState([])

    useEffect(() => {
        const fetchBevs = async () => {
            let req = await fetch("http://localhost:3000/menu_items/Beverage")
            let res = await req.json()
            if (req.ok) {
                setBeverageList(res)
            }
        }
        fetchBevs()

    }, [])

    const addBevToOrder = (drink) => {
        setSelectedItemList((prevState) => {
            addToTotal(drink.price)
            return [...prevState, drink]
        })
    }
    return (
        <div className="item-list-container">
            {
                beverageList.map((drink) => {
                    return (
                        <div key={drink.id} className="menu-item" onClick={() => addBevToOrder(drink)}>
                            {drink.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Beverages
import { useState, useEffect } from "react"

const Desserts = ({ setSelectedItemList }) => {
    const [dessertList, setDessertList] = useState([])

    useEffect(() => {
        const fetchDesserts = async () => {
            let req = await fetch("http://localhost:3000/menu_items/Dessert")
            let res = await req.json()
            if (req.ok) {
                setDessertList(res)
            }
        }
        fetchDesserts()

    }, [])

    const addDessertToOrder = (dessert) => {
        setSelectedItemList((prevState) => {
            return [...prevState, dessert]
        })
    }

    return (
        <div className="item-list-container">
            {
                dessertList.map((dessert) => {
                    return (
                        <div key={dessert.id} className="menu-item" onClick={() => addDessertToOrder(dessert)}>
                            {dessert.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Desserts
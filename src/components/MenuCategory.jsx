import { useState, useEffect } from "react"

const MenuCategory = ({ addToTotal, updateFoodList, selectedCategory}) => {
    // console.log(selectedCategory)
    const [itemList, setItemList] = useState([])
    useEffect(() => {
        const fetchMenuItem = async () => {
            let req = await fetch(`http://localhost:3000/menu_items/${selectedCategory}`)
            let res = await req.json()
            if (req.ok) {
                setItemList(res)
            }
        }
        fetchMenuItem()
    },[selectedCategory])

    const addItemToOrder = (clickedItem) => {
        updateFoodList(clickedItem)
        addToTotal(clickedItem.price)
    }

    return (
        <div className="item-list-container">
            {
                itemList.map((item) => {
                    return (
                        <div key={item.id} className="menu-item" onClick={() => addItemToOrder(item)}>
                            {item.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MenuCategory
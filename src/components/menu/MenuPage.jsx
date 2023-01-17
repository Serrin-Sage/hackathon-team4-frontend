import { useEffect, useState } from 'react'
import { json, useNavigate } from "react-router-dom"
import MenuCategoryNavBar from './MenuCategoryNavBar'
import MenuItemsContainer from './MenuItemsContainer'
import TableOrder from './TableOrder'

// navigates from clicking on one Table div

const MenuPage = ({ currentStaff }) => {
    
    useEffect(() => {
        fetch(`http://localhost:3000/staff/${currentStaff.id}/clock_in`, {
            method: "PATCH"
        })
    },[])

    const [currentCategoryItems, setcurrentCategoryItems] = useState(false)

    // useEffect to fetch the menu data, map over each item in list for button

    function renderCurrentItems(selectedItemCategoryName) {
        const selectedItemCategory = allItems.find(items => (items.category === selectedItemCategoryName))
        setcurrentCategoryItems(selectedItemCategory)
    }

    return (
        <div className="menu-page">
            <MenuCategoryNavBar renderCurrentItems={renderCurrentItems} />
            <MenuItemsContainer currentCategoryItems={currentCategoryItems}/>
            <TableOrder />
        </div>
    )
}

export default MenuPage
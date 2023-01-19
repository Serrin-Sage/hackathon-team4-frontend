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
    const [allMenuItems, setAllMenuItems] = useState([])
    const [serverTables, setServerTables] = useState([])

    // useEffect to fetch the menu data, map over each item in list for button
    useEffect(() => {
        fetch('http://localhost:3000/menu_items')
        .then(res => {
            if (res.ok) {
                res.json().then((data) => setAllMenuItems(data))
            } else {
                return res.text().then((text) => Promise.reject(text))
            }
        })
    }, [])

    // function renderCurrentItems(selectedItemCategoryName) {
    //     const selectedItemCategory = allMenuItems.find(items => (items.category === selectedItemCategoryName))
    //     console.log(selectedItemCategory)
    //     // setcurrentCategoryItems(selectedItemCategory)
    // }
    useEffect(() =>
        fetch(`http//localhost3000/staff/${currentStaff.id}/tables`)
        .then(res=> res.json())
        .then(data=> setServerTables(data)), []
    )
    return (
        <div className="menu-page">
            <MenuCategoryNavBar allMenuItems={allMenuItems}/>
            {/* <MenuItemsContainer currentCategoryItems={currentCategoryItems}/> */}
            <TableOrder />
        </div>
    )
}

export default MenuPage
import { useEffect, useState } from "react"
import MenuItemCategoryTile from "./MenuItemCategoryTile"

const MenuCategoryNavBar = ({ renderCurrentItems, allMenuItems }) => {

    const [categories, setCategories] = useState([])

    function getCategories(){
        fetch('http://localhost:3000/categories')
        .then(res => res.json())
        .then(data => setCategories(data.categories))
    }

   useEffect(getCategories, [])
    
    return (
        <nav id="menu-item-bar">
            {categories.map(category => <MenuItemCategoryTile  category = {category}/>)}
        </nav>
    )
}

export default MenuCategoryNavBar
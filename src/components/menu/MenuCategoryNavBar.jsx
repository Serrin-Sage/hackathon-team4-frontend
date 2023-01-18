import { useEffect, useState } from "react"
import MenuItemCategoryTile from "./MenuItemCategoryTile"
import MenuItemsContainer from "./MenuItemsContainer"

const MenuCategoryNavBar = ({ renderCurrentItems, allMenuItems }) => {

    const [categories, setCategories] = useState([])
    const [currCategory, setCurrCategory] = useState('Appetizer')

    function getCategories(){
        fetch('http://localhost:3000/categories')
        .then(res => res.json())
        .then(data => setCategories(data.categories))
    }

    function showCategory(category){
        setCurrCategory(category)
    }

   useEffect(getCategories, [])
    
    return (
        <nav id="menu-item-bar">
            {categories.map((category, i) => <MenuItemCategoryTile  category = {category} setCurrCategory = {setCurrCategory} key = {i}/>)}
            {currCategory==='Beverage'?<MenuItemsContainer category = {'Beverage'}/>:null}
            {currCategory==='Entree'?<MenuItemsContainer category = {'Entree'}/>:null}
            {currCategory==='Appetizer'?<MenuItemsContainer category = {'Appetizer'}/>:null}
            {currCategory==='Dessert'?<MenuItemsContainer category = {'Dessert'}/>:null}
        </nav>
    )
}

export default MenuCategoryNavBar
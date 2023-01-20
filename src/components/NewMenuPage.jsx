import { useState, useEffect } from "react"

import MenuHeader from "./MenuHeader"

import MenuCategory from "./MenuCategory"

import Receipt from "./Receipt"
import Beverages from "./Beverages"
import Appetizers from "./Appetizers"
import Entrees from "./Entrees"
import Desserts from "./Desserts"

const NewMenuPage = ({ currentStaff }) => {

    useEffect(() => {
        fetch(`http://localhost:3000/staff/${currentStaff.id}/clock_in`, {
            method: "PATCH"
        })
    }, [])

    // const [showBevs, setShowBevs] = useState(true)
    // const [showApps, setShowApps] = useState(false)
    // const [showEntrees, setShowEntrees] = useState(false)
    // const [showDesserts, setShowDesserts] = useState(false)

    const [selectedItemList, setSelectedItemList] = useState([])
    const [total, setTotal] = useState(0)
    const [currentTable, setCurrentTable] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('Beverage')
    
    // const clickCategory = (selection) => {
    //     if (selection === "Beverages") {
    //         setShowBevs(true)
    //         setShowApps(false)
    //         setShowEntrees(false)
    //         setShowDesserts(false)
    //     } else if (selection === "Appetizers") {
    //         setShowBevs(false)
    //         setShowApps(true)
    //         setShowEntrees(false)
    //         setShowDesserts(false)
    //     } else if (selection === "Entrees"){
    //         setShowBevs(false)
    //         setShowApps(false)
    //         setShowEntrees(true)
    //         setShowDesserts(false)
    //     } else if (selection === "Desserts"){
    //         setShowBevs(false)
    //         setShowApps(false)
    //         setShowEntrees(false)
    //         setShowDesserts(true)
    //     }
    // }

    function addToTotal(val){
        setTotal(total + val)
    }

    function clearTotal() {
        setTotal(0)
    }
    
    function handleSetCurrentTable(table) {
        setCurrentTable(table)
    }

    function getOrder(itemList) {
        setSelectedItemList(itemList)
    }

    function clearOrder(x) {
        setSelectedItemList(x)
    }

    function getTotal(){
        let total = 0
        selectedItemList.map(item => total+= item.price)
        setTotal(total)
    }

    const updateFoodList = (item) => {
        setSelectedItemList((prevState) => {
            return [...prevState, item]
        })
    }

    return (
        <div className="menu-page-container">
            <MenuHeader currentStaff={currentStaff} handleSetCurrentTable={handleSetCurrentTable} getOrder={getOrder} getTotal = {getTotal}/>
            <div className="menu-page-content">
                <Receipt selectedItemList={selectedItemList} total = {total} currentTable={currentTable} clearOrder={clearOrder} clearTotal={clearTotal}/>
                <div className="category-page">
                    <div className="category-labels">
                        <div onClick={() => setSelectedCategory("Beverage")} className="category-title" id={selectedCategory === "Beverage" ? 'bev-tab' : 'inactive-tab'}>Beverages</div>
                        <div onClick={() => setSelectedCategory("Appetizer")} className="category-title" id={selectedCategory === "Appetizer" ? 'apps-tab' : 'inactive-tab'}>Appetizers</div>
                        <div onClick={() => setSelectedCategory("Entree")} className="category-title" id={selectedCategory === "Entree" ? 'entree-tab' : 'inactive-tab'}>Entrees</div>
                        <div onClick={() => setSelectedCategory("Dessert")} className="category-title" id={selectedCategory === "Dessert" ? 'dessert-tab' : 'inactive-tab'}>Desserts</div>
                    </div>
                    <div className="menu-content">

                        {/* {showBevs ? <Beverages addToTotal = {addToTotal} setSelectedItemList={setSelectedItemList}/> : null}
                        {showApps ? <Appetizers addToTotal = {addToTotal} setSelectedItemList={setSelectedItemList}/> : null}
                        {showEntrees ? <Entrees setSelectedItemList={setSelectedItemList}/> : null}
                        {showDesserts ? <Desserts setSelectedItemList={setSelectedItemList}/> : null} */}

                        <MenuCategory addToTotal={addToTotal} updateFoodList={updateFoodList} selectedCategory={selectedCategory}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewMenuPage
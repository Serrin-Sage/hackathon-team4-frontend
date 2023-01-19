import { useState } from "react"

import MenuHeader from "./MenuHeader"
import Receipt from "./Receipt"
import Beverages from "./Beverages"
import Appetizers from "./Appetizers"
import Entrees from "./Entrees"
import Desserts from "./Desserts"

const NewMenuPage = ({ currentStaff }) => {
    const [showBevs, setShowBevs] = useState(true)
    const [showApps, setShowApps] = useState(false)
    const [showEntrees, setShowEntrees] = useState(false)
    const [showDesserts, setShowDesserts] = useState(false)

    const [selectedItemList, setSelectedItemList] = useState([])
    const [total, setTotal] = useState(0)
    const [currentTable, setCurrentTable] = useState('')

    const clickCategory = (selection) => {
        if (selection === "Beverages") {
            setShowBevs(true)
            setShowApps(false)
            setShowEntrees(false)
            setShowDesserts(false)
        } else if (selection === "Appetizers") {
            setShowBevs(false)
            setShowApps(true)
            setShowEntrees(false)
            setShowDesserts(false)
        } else if (selection === "Entrees"){
            setShowBevs(false)
            setShowApps(false)
            setShowEntrees(true)
            setShowDesserts(false)
        } else if (selection === "Desserts"){
            setShowBevs(false)
            setShowApps(false)
            setShowEntrees(false)
            setShowDesserts(true)
        }
    }

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
    return (
        <div className="menu-page-container">
            <MenuHeader currentStaff={currentStaff} handleSetCurrentTable={handleSetCurrentTable} getOrder={getOrder}/>
            <div className="menu-page-content">
                <Receipt selectedItemList={selectedItemList} total = {total} currentTable={currentTable} clearOrder={clearOrder} clearTotal={clearTotal}/>
                <div className="category-page">
                    <div className="category-labels">
                        <div onClick={() => clickCategory("Beverages")} className="category-title" id={showBevs ? 'bev-tab' : 'inactive-tab'}>Beverages</div>
                        <div onClick={() => clickCategory("Appetizers")} className="category-title" id={showApps ? 'apps-tab' : 'inactive-tab'}>Appetizers</div>
                        <div onClick={() => clickCategory("Entrees")} className="category-title" id={showEntrees ? 'entree-tab' : 'inactive-tab'}>Entrees</div>
                        <div onClick={() => clickCategory("Desserts")} className="category-title" id={showDesserts ? 'dessert-tab' : 'inactive-tab'}>Desserts</div>
                    </div>
                    <div className="menu-content">

                        {showBevs ? <Beverages addToTotal = {addToTotal} setSelectedItemList={setSelectedItemList}/> : null}
                        {showApps ? <Appetizers addToTotal = {addToTotal} setSelectedItemList={setSelectedItemList}/> : null}
                        {showEntrees ? <Entrees setSelectedItemList={setSelectedItemList}/> : null}
                        {showDesserts ? <Desserts setSelectedItemList={setSelectedItemList}/> : null}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewMenuPage
import { useState } from "react"

import MenuHeader from "./MenuHeader"
import Receipt from "./Receipt"
import Beverages from "./Beverages"
import Appetizers from "./Appetizers"

const NewMenuPage = ({ currentStaff }) => {
    const [showBevs, setShowBevs] = useState(true)
    const [showApps, setShowApps] = useState(false)
    const [showEntrees, setShowEntrees] = useState(false)
    const [showDesserts, setShowDesserts] = useState(false)

    const [selectedItemList, setSelectedItemList] = useState([])

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
    
    return (
        <div className="menu-page-container">
            <MenuHeader currentStaff={currentStaff}/>
            <div className="menu-page-content">
                <Receipt selectedItemList={selectedItemList}/>
                <div className="category-page">
                    <div className="category-labels">
                        <div onClick={() => clickCategory("Beverages")}>Beverages</div>
                        <div onClick={() => clickCategory("Appetizers")}>Appetizers</div>
                        <div onClick={() => clickCategory("Entrees")}>Entrees</div>
                        <div onClick={() => clickCategory("Desserts")}>Desserts</div>
                    </div>
                    <div className="menu-content">
                        {showBevs ? <Beverages setSelectedItemList={setSelectedItemList}/> : null}
                        {showApps ? <Appetizers setSelectedItemList={setSelectedItemList}/> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewMenuPage
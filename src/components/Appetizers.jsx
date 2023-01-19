import { useState, useEffect } from "react"

const Appetizers = ({ setSelectedItemList }) => {
    const [appsList, setAppsList] = useState([])
    useEffect(() => {
        const fetchApps = async () => {
            let req = await fetch("http://localhost:3000/menu_items/Appetizer")
            let res = await req.json()
            if (req.ok) {
                setAppsList(res)
            }
        }
        fetchApps()

    }, [])

    const addAppToOrder = (appetizer) => {
        setSelectedItemList((prevState) => {
            return [...prevState, appetizer]
        })
    }
    
    return (
        <div className="item-list-container">
            {
                appsList.map((appetizer) => {
                    return (
                        <div key={appetizer.id} className="menu-item" onClick={() => addAppToOrder(appetizer)}>
                            {appetizer.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Appetizers
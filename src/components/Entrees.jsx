import { useState, useEffect } from "react"

const Entrees = ({ setSelectedItemList }) => {
    const [entreeList, setEntreeList] = useState([])

    useEffect(() => {
        const fetchEntrees = async () => {
            let req = await fetch("http://localhost:3000/menu_items/Entree")
            let res = await req.json()
            if (req.ok) {
                setEntreeList(res)
            }
        }
        fetchEntrees()

    }, [])

    const addEntreeToOrder = (entree) => {
        setSelectedItemList((prevState) => {
            return [...prevState, entree]
        })
    }

    return (
        <div className="item-list-container">
            {
                entreeList.map((entree) => {
                    return (
                        <div key={entree.id} className="menu-item" onClick={() => addEntreeToOrder(entree)}>
                            {entree.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Entrees
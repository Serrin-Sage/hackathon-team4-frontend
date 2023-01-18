import MenuItemTile from "./MenuItemTile"

const MenuItemsContainer = ({ category }) => {

    const [menuItems, setMenuItems] = useState([])

    function getMenuItems(){
        fetch(`http://localhost:3000/${category}`)
        .then(res=>res.json())
        .then(data=>setMenuItems(data))
    }

    useEffect(getMenuItems, [])

    return (
        <div>
            {menuItems.map(item => <MenuItemTile  item = {item}/>)}
        </div>
    )
}

export default MenuItemsContainer
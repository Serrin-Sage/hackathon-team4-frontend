const Receipt = ({ selectedItemList }) => {
    
    return (
        <div>
            Order
            <ul>
                {
                    selectedItemList.map((item) => {
                        return (
                            <li>    
                                {item.name}
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default Receipt
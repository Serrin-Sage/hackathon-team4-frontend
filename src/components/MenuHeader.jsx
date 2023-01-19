
// function determineSection(currentStaff) {
    //     if (currentStaff.section === 1){
        //         return [1,2];
        //     } else {
            //         return null;
            //     }
            // }
            
            // const currentStaff = {section: 1};
            // const section = determineSection(currentStaff);
            // console.log(section)
let tables = {1:[1,2],2: [3,4], 3:[5,6], 4:[7]}
const MenuHeader = ({ currentStaff, handleSetCurrentTable, getOrder }) => {

function switchTables(id){
    handleSetCurrentTable(id)
    fetch(`http://localhost:3000/table/${id}/currentorder`)
    .then(res => res.json())
    .then(data => getOrder(data))
}
    return (
        <div className="menu-header">
            <p>Hey {currentStaff.name}, your section is {currentStaff.section}, and tables are: </p> 
            {currentStaff.section? tables[currentStaff.section].map(section => <button onClick={() => switchTables(section)} >{section}</button>) : <p>You currently have no section</p>}
        </div>
    )
}

export default MenuHeader

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
const MenuHeader = ({ currentStaff }) => {


    return (
        <div className="menu-header">
            <p>Hey {currentStaff.name}, your section is {currentStaff.section}, and tables are: </p> 
            {tables[currentStaff.section].map(section => <button>{section}</button>)}
        </div>
    )
}

export default MenuHeader
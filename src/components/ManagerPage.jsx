import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TablePage from "./TablePage"
import StaffModal from './StaffModal'
import AddForm from './AddForm'
import DismissForm from './DismissForm'

const ManagerPage = () => {
    const [viewStaff, setViewStaff] = useState(false)
    const [viewAddForm, setViewAddForm] = useState(false)
    const [viewDismissForm, setViewDimissForm] = useState(false)
    const [displayNeon, setDisplayNeon] = useState(true)

    const navigate = useNavigate(
        
    )
    
    
    return (
        <div className={`manager-main-container ${displayNeon ? 'neon-on' : 'neon-off'}`}>
            <div className="table-screen">

                <div className="table-1" id="table-1" >
                    <img src= "src/assets/new-chair.png"  className="chair-1" id="1">
                    </img>
                    <img src="src/assets/new-chair.png" className="chair-2" id="2">
                    </img>
                    <img src="src/assets/chair.png" className="chair-3" id="3">
                    </img>
                    <img src="src/assets/chair.png" className="chair-4" id="4">
                    </img>
                </div>
                <div className="table-2" id="table-2">
                    <img src="src/assets/new-chair.png" className="chair-1" id="5">
                    </img>
                    <img src="src/assets/new-chair.png" className="chair-2" id="6">
                    </img>
                    <img src="src/assets/chair.png" className="chair-3" id="7">
                    </img>
                    <img src="src/assets/chair.png" className="chair-4" id="8">
                    </img>
                </div>
                <div className="table-3" id="table-3">
                    <img src="src/assets/new-chair.png" className="chair-1a" id="9">
                    </img>
                    <img src="src/assets/chair.png" className="chair-2a" id="10">
                    </img>
                </div>
                <div className="table-4" id="table-4">
                    <img src="src/assets/new-chair.png" className="chair-1a" id="11">
                    </img>
                    <img src="src/assets/chair.png" className="chair-2a" id="12">
                    </img>
                </div>
                <div className="table-5" id="table-5">
                    <img src="src/assets/new-chair.png" className="chair-1b" id="13">
                    </img>
                    <img src="src/assets/new-chair.png" className="chair-2b" id="14">
                    </img>
                    <img src="src/assets/chair.png" className="chair-3b" id="15">
                    </img>
                    <img src="src/assets/chair.png" className="chair-4b" id="16">
                    </img>
                </div>
                <div className="table-6" id="table-6">
                    <img src="src/assets/new-chair.png" className="chair-1b" id="17">
                    </img>
                    <img src="src/assets/new-chair.png" className="chair-2b" id="18">
                    </img>
                    <img src="src/assets/chair.png" className="chair-3b" id="19">
                    </img>
                    <img src="src/assets/chair.png" className="chair-4b" id="20">
                    </img>
                </div>
            
                <div className="table-7" id="table-7">
                    <img src="src/assets/new-chair.png" className="chair-1c" id="21">
                    </img>
                    <img src="src/assets/new-chair.png" className="chair-2c" id="22">
                    </img>
                    <img src="src/assets/new-chair.png" className="chair-3c" id="23">
                    </img>
                    <img src="src/assets/new-chair.png" className="chair-4c" id="24">
                    </img>
                </div>
                

                {/* <TablePage /> */}

            </div>
            <div className="staff-screen">
                <div className='grid-item'></div>
                <div className='grid-item'></div>
                <div className='grid-item'></div>
                <div className='grid-item' id="neon-btn" onClick={() => setDisplayNeon((current) => !current)}>{displayNeon ? "Neon: Off" : "Neon: On"}</div>
                <div className='grid-item' id="view-btn" onClick={() => setViewStaff(true)}>View Staff</div>
                <div className='grid-item'></div>
                <div className='grid-item'></div>
                <div className='grid-item'></div>
                <div className='grid-item' id="add-btn" onClick={() => setViewAddForm(true)}>Add Staff</div>
                <div className='grid-item' id="dimiss-btn" onClick={() => setViewDimissForm(true)}>Dismiss Staff</div>
                <div className='grid-item'></div>
                <div className='grid-item' id="logout-btn" onClick={() => navigate("/")}>Logout</div>
            </div>
            {viewStaff ? <StaffModal setViewStaff={setViewStaff}/> : null}
            {viewAddForm ? <AddForm /> : null}
            {viewDismissForm ? <DismissForm /> : null}
        </div>
    )
}

export default ManagerPage
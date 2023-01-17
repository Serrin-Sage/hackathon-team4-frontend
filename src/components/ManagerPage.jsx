import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TablePage from "./TablePage"
import StaffModal from './StaffModal'
const ManagerPage = () => {
    const [staff, setStaff] = useState([])
    const [viewStaff, setViewStaff] = useState(false)
    const [displayNeon, setDisplayNeon] = useState(true)

    const navigate = useNavigate(
        
    )
    useEffect(() => {
        fetch("http://localhost:3000/staff")
        .then((res) => res.json())
        .then((data) => {
            const staffEmployee = data.filter(staff => staff.is_manager === false)
            setStaff(staffEmployee)
        })
    },[setStaff])
    
    return (
        <div className={`manager-main-container ${displayNeon ? 'neon-on' : 'neon-off'}`}>
            <div className="table-screen">
                TABLE VIEW WILL GO HERE
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
                <div className='grid-item' id="add-btn">Add Staff</div>
                <div className='grid-item' id="dimiss-btn">Dismiss Staff</div>
                <div className='grid-item'></div>
                <div className='grid-item' id="logout-btn" onClick={() => navigate("/")}>Logout</div>
            </div>
            {viewStaff ? <StaffModal staff={staff} setViewStaff={setViewStaff}/> : null}
        </div>
    )
}

export default ManagerPage
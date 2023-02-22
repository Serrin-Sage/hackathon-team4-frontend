import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TablePage from "./TablePage"
import StaffModal from './StaffModal'
import AddForm from './AddForm'
import DismissForm from './DismissForm'

const ManagerPage = ({ currentStaff }) => {
    const [staff, setStaff] = useState([])
    const [viewStaff, setViewStaff] = useState(false)
    const [viewAddForm, setViewAddForm] = useState(false)
    const [viewDismissForm, setViewDimissForm] = useState(false)
    const [displayNeon, setDisplayNeon] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchStaff = async () => {
            let req = await fetch("http://localhost:3000/staff")
            let res = await req.json()
            if (req.ok) {
                const staffEmployee = res.filter(staff => staff.manager === false)
                setStaff(staffEmployee)
            }
        }
        fetchStaff()

    }, [])
    
    const updateStaffStatus = (id, value) => {
        let updatedArray = staff.map((staffer) => {
            if (staffer.id === id) {
                return {...staffer, clocked_in : value}
            } else {
                return staffer
            }
        })
        setStaff(updatedArray)
    }

    return (
        <div className={`manager-main-container ${displayNeon ? 'neon-on' : 'neon-off'}`}>
            {/* <div className="table-screen">
                <TablePage />
            </div> */}
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
            {viewStaff ? <StaffModal 
                            staff={staff} 
                            setStaff={setStaff} 
                            setViewStaff={setViewStaff}
                            displayNeon={displayNeon}/> : null}
            {viewAddForm ? <AddForm setViewAddForm={setViewAddForm} displayNeon={displayNeon} setStaff={setStaff}/> : null}
            {viewDismissForm ? <DismissForm updateStaffStatus={updateStaffStatus}
                                            setViewDimissForm={setViewDimissForm}
                                            displayNeon={displayNeon}/> : null}
        </div>
    )
}

export default ManagerPage
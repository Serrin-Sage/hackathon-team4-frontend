import { useState, useEffect } from 'react'
import TablePage from "./TablePage"

const ManagerPage = () => {
    const [staff, setStaff] = useState([])
    let employeeView = "manager-view"

    useEffect(() => {
        fetch("http://localhost:3000/staff")
        .then((res) => res.json())
        .then((data) => {
            const staffEmployee = data.filter(staff => staff.is_manager === false)
            setStaff(staffEmployee)
        })
    },[setStaff])
    
    return (
        <div className="manager-main-container">
            <div className="table-screen">
                TABLE VIEW WILL GO HERE
            </div>
            <div className="staff-screen">
                <div className='staff-list'>
                    {
                        staff.map((staffer) => {
                            return (
                                <div key={staffer.id} className="staff-item">
                                    {staffer.name} <span>{staff.section}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='other-buttons'>
                    <div className='display-item'>Add Staff</div>
                    <div className='display-item'></div>
                    <div className='display-item'></div>
                    <div className='display-item'></div>
                    <div className='display-item'></div>
                    <div className='display-item'></div>
                    <div className='display-item'></div>
                    <div className='display-item'></div>
                    <div className='display-item'></div>
                </div>
            </div>
            
        </div>
    )
}

export default ManagerPage
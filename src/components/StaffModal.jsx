const StaffModal = ({ staff, setViewStaff }) => {

    return (
        <div className="staff-modal-container">
            <span className="exit-button" onClick={() => setViewStaff(false)} >X</span>
            <table>
                <tr className="table-headers">
                    <th>Name</th>
                    <th>Section</th>
                </tr>
                {
                    staff.map((staffer) => {
                        return (
                            <tr key={staffer.id}>
                                <td>{staffer.name}</td>
                                <td>{staffer.section}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default StaffModal
import React from 'react'

const ListTasks = ({ Tasks }) => {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>StartDate</th>
                        <th>EndDate</th>
                    </tr>
                </thead>
                <tbody>
                    {Tasks.length > 1 ? Tasks.map((Task, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{Task.Name}</td>
                                <td>{Task.Type === 1 ? "Urgent" : "Midium"}</td>
                                <td>{Task.Status === 1 ? "Pending" : "Assigned"}</td>
                                <td>{Task.StartDate !== null ? Task.StartDate.toLocaleString().split(',')[0] : ""}</td>
                                <td>{Task.EndDate !== null ? Task.EndDate.toLocaleString().split(',')[0] : ""}</td>
                            </tr>
                        )
                    }) : <tr className="no-data">
                            <td colSpan="6">No data to display</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListTasks
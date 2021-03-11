import React from 'react'

function ListProjects({ Projects }) {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Prject's Manager</th>
                        <th>Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {Projects && Projects.length > 1 ? Projects.map((Project, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{Project.Name}</td>
                                {/* <td>{Task.Type === 1 ? "Urgent" : "Midium"}</td>
                                <td>{Task.Status === 1 ? "Pending" : "Assigned"}</td>
                                <td>{Task.StartDate !== null ? Task.StartDate.toLocaleString().split(',')[0] : ""}</td>
                                <td>{Task.EndDate !== null ? Task.EndDate.toLocaleString().split(',')[0] : ""}</td> */}
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

export default ListProjects

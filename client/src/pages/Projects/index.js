import React from 'react'
import ManageProject from './ManageProject'
import ListProjects from './ListProjects'
import * as icons from "react-icons/fa"

function index() {
    return (
        <>
            <div className="page-header">
                <h4>Manage Projects</h4>
            </div>
            <section className="card">
                <div className="card-header">
                    <button className="btn" data-toggle="modal" data-target="#taskModal">Add<icons.FaPlus /></button>
                </div>
                <div className="card-body">
                    <ListProjects />
                    <ManageProject />
                </div>
            </section>
        </>
    )
}

export default index

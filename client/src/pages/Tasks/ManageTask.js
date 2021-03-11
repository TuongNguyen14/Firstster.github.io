import React, { useState, useCallback, memo } from 'react';
import Select from '../../components/Select';
import { Post } from '../../library/api'

const ManageTask = ({ Task }) => {
    const [taskDetails, setTaskDetails] = useState({});
    const [Projects, setProjects] = useState([]);

    const getProjects = useCallback(() => {
        Post('/projects/', null, (response) => { setProjects(response) });
    }, [])

    const handleSubmit = () => {

    }

    const handleProjectChange = (newValue) => {
        setTaskDetails({ ...taskDetails, ProjectId: newValue });
    }

    return (
        <>
            <div className="modal fade bd-example-modal-lg" id="taskModal" role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Task Details</h3>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-2">
                                    <label>Name:</label>
                                </div>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Task's Name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <label>Project:</label>
                                </div>
                                <div className="col-md-10">
                                    <Select items={Projects} selectedItem={Task ? Task.ProjectId : ""} callback={handleProjectChange} getData={getProjects} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(ManageTask)

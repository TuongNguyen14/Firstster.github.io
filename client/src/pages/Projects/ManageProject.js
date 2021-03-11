import React, { useEffect, useState } from 'react'
import Select from '../../components/Select';
import { Get } from '../../library/api';

function ManageProject() {
    const [details, setDetails] = useState({});
    const [users, setUsers] = useState([]);

    const getUsers = useEffect(() => {
        Get('/users/', null, (response) => { console.log(response); setUsers(response) });
    }, [])
    return (
        <>
            <div className="modal fade bd-example-modal-lg" id="taskModal" role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Project Details</h3>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-2">
                                        <label>Name:</label>
                                    </div>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Project's name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <label>Project's Manager:</label>
                                    </div>
                                    <div className="col-md-10">
                                        <Select items={users} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <label>Description:</label>
                                    </div>
                                    <div className="col-md-10">
                                        <textarea className="form-control"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" >Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageProject

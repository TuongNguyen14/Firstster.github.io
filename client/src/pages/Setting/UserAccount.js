import React, { useContext, useState } from 'react'
import { UserContext } from '../../UserContext'

function UserAccount() {
    const User = useContext(UserContext);
    const [Details, setDetails] = useState(User)
    const submitHandeler = () => {

    }
    return (
        <>
            <div className="title">
                <h4>User Information</h4>
            </div>
            <form onSubmit={submitHandeler}>
                <div className="form-group-material">
                    <input id="username" type="text" name="Username" readOnly value={Details.username} className="input-material" />
                    <label htmlFor="username" className="label-material active">Username</label>
                </div>
                <div className="form-group-material">
                    <input id="password" type="password" name="Password" onChange={(e) => setDetails({ ...Details, password: e.target.value })} className="input-material" />
                    <label htmlFor="password" className={Details.password ? "label-material active" : "label-material"}>Password</label>
                </div>
                <div className="form-group-material">
                    <input id="checkpassword" type="password" name="CheckPassword" onChange={(e) => setDetails({ ...Details, checkpassword: e.target.value })} className="input-material" />
                    <label htmlFor="checkpassword" className={Details.checkpassword ? "label-material active" : "label-material"}>Confirm Password</label>
                </div>
            </form>
        </>
    )
}

export default UserAccount

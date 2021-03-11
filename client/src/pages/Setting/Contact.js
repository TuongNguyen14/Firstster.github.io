import React, { useContext, useState } from 'react'
import { UserContext } from '../../UserContext'

function Contact() {
    const User = useContext(UserContext);
    const [Details, setDetails] = useState(User)
    const submitHandeler = () => {

    }

    const inputHandeler = (e) => {
        setDetails({ ...Details, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="title">
                <h4>Personal Information</h4>
            </div>
            <form onSubmit={submitHandeler}>
                {/* <div className="form-group-material">
                    <input id="email" type="text" name="Email" value={Details.email} onChange={e => inputHandeler(e)} className="input-material" />
                    <label htmlFor="email" className={Details.email ? "label-material active" : "label-material"}>Email address</label>
                </div> */}
                <div className="form-group-material">
                    <input id="email" type="text" name="email" value={Details.email} onInput={e => inputHandeler(e)} className="input-material" />
                    <label htmlFor="email" className={Details.email ? "label-material active" : "label-material"}>Email address</label>
                </div>
                <div className="form-group-material">
                    <input id="phone" type="text" name="Phone" value={Details.phone} onInput={e => inputHandeler(e)} className="input-material" />
                    <label htmlFor="phone" className={Details.phone ? "label-material active" : "label-material"}>Contact number</label>
                </div>
            </form>
        </>
    )
}

export default Contact

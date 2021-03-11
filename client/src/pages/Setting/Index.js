import React from 'react'
import UserAccount from './UserAccount'
import Contact from './Contact'

function Index() {
    return (
        <>
            <div className="page-header">
                <h5>My account</h5>
            </div>
            <section className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="block">
                            <UserAccount />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="block">
                            <Contact />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Index

import React from 'react'
import "./LoginForm.css";
import LoginForm from './LoginForm'
import Register from './Register'

function Index() {
    const FormFlip = () => {
        document.querySelector("#flipper").classList.toggle("flip");
    }
    return (
        <>
            <section className="main">
                <div className="layer">
                    <div className="bottom-grid">
                    </div>
                    <div className="content-w3ls">
                        {/* <div className="text-center icon">
                            <span className="fa fa-html5"></span>
                        </div> */}
                        <div className="flip-container">
                            <div className="flipper" id="flipper">
                                <LoginForm FormFlip={FormFlip} />
                                <Register FormFlip={FormFlip} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Index

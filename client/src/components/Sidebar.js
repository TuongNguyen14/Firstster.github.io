import React, { useContext, memo } from 'react';
import { UserContext } from "../UserContext";
import Navlinks from './Navlinks';

const Sidebar = ({ isOpen }) => {
    const User = useContext(UserContext);
    let Image = `../img/${User.img}`;

    return (
        <div className="d-flex align-items-stretch">
            <nav id="sidebar" className={isOpen ? "shrinked" : ""}>
                <div className="sidebar-header d-flex align-items-center">
                    <div className="avatar">
                        <img src={Image} alt="..." className="img-fluid rounded-circle" />
                    </div>
                    <div className="title">
                        <h5>{User.fullname}</h5>
                    </div>
                </div>
                <Navlinks />
            </nav>
        </div>
    );
}

export default memo(Sidebar);
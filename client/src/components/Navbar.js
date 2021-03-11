import React from 'react';
import * as icons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as security from '../security'

class Navbar extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            open: true,
        }
    }

    ToggleMobileNavbar = () => {
        this.setState({ open: !this.state.open });
        this.props.isOpen(this.state.open);
    }

    componentDidMount = () => {
        this.ToggleMobileNavbar()
    }

    Logout = () => {
        security.Logout()
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid d-flex align-items-center justify-content-between">
                        <div className="">
                            <i className={this.state.open ? "burger open" : "burger"} onClick={this.ToggleMobileNavbar}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </i>
                        </div>
                        <div className="navbar-header">
                        </div>
                        <div className="list-inline-item logout">
                        <a className="dropdown-item" href="/#" onClick={this.Logout}>Logout <i><icons.FaSignOutAlt /></i></a>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;
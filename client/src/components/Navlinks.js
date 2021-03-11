import React from "react";
import * as icons from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Navlinks extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeId: "",
            Items: [
                { id: "1", text: "Home", link: "/", icons: <icons.FaHome /> },
                {
                    id: "2", text: "Manage", link: "/#", icons: <icons.FaListAlt />,
                    subItems: [
                        { id: "3", text: "ManageTasks", link: "/ManageTasks", icons: <icons.FaTasks /> },
                        { id: "4", text: "ManageUsers", link: "/ManageUsers", icons: <icons.FaUser /> }
                    ]
                },
                { id: "3", text: "Setting", link: "/Setting", icons: <icons.FaCog /> },
            ],
            isOpened: false
        };
    }


    componentDidMount() {
        let activeid = "";
        var activelink = this.state.Items.find(e => e.link === window.location.pathname);
        if (activelink) activeid = activelink.id;
        else {
            var sublink = null;
            this.state.Items.forEach(e => {
                if (e.subItems) {
                    var sub = e.subItems.find(se => se.link === window.location.pathname);
                    if (sub) {
                        sublink = e.id + "|" + sub.id;
                        return;
                    }
                }
            })
            if (sublink) activeid = sublink;
            else activeid = "1";
        }
        this.setState({
            activeId: activeid,
        })
    }

    setActiveId(id) {
        this.setState({ activeId: id });
    }

    render() {
        return (
            <ul className="list-unstyled">
                {
                    this.state.Items.map((item) => {
                        if (item.subItems) {
                            return (
                                <li key={item.id} className={this.state.activeId === item.id || this.state.activeId.split('|')[0] === item.id ? "active" : ""}>
                                    <a href={item.link} onClick={() => this.setActiveId(item.id)} aria-expanded="false" data-toggle="collapse">
                                        <i>{item.icons}<icons.FaCaretDown /></i>
                                        <span>{item.text}</span>
                                    </a>
                                    <ul id={item.id + "_dropdown"} className={this.state.activeId.split('|')[0] === item.id ? "list-unstyled show" : "list-unstyled collapse"}>
                                        {item.subItems.map((subitem) => {
                                            return (
                                                <li key={subitem.id} onClick={() => this.setActiveId(item.id + "|" + subitem.id)} className={this.state.activeId.split('|')[1] === subitem.id ? "active" : ""}>
                                                    <Link to={subitem.link}><i>{subitem.icons}</i><span>{subitem.text}</span></Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        }
                        else return (
                            <li key={item.id} onClick={() => this.setActiveId(item.id)} className={this.state.activeId === item.id || this.state.activeId.split('|')[0] === item.id ? "active" : ""}>
                                <Link to={item.link}><i>{item.icons}</i><span>{item.text}</span></Link>
                            </li>
                        )
                    })
                }
            </ul >
        );
    }
}


export default Navlinks;
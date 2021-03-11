import React from 'react'

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null
        }
    }
    componentDidCatch() {
        this.props.getData();
    }

    callback(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        if (this.state.items && this.state.items.length > 0)
            return (
                <select className="form-control" onChange={this.callback.bind(this)}>
                    {this.state.items.map((item) => {
                        return (
                            <option key={item._id} value={item._id} {...this.props.selectedItem === item._id ? "selected" : ""}> { item.Name}</option>
                        )
                    })
                    }
                </select >
            )
        else return (
            <select className="form-control">
                <option defaultValue disabled> -- select an option -- </option>
            </select>
        )
    }
}

export default Select

import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <h3>{this.props.name}</h3>
        )
    }
}

export default Nav;
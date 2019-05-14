import React from 'react';

class SubNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let productName = this.props.match.params.productName;

        let currentNav = this.props.navs.find(nav =>{ 
            return nav.route === productName
        });

        if (currentNav === undefined) {
            return ( <p>none</p>);
        }

        return (
            <p>{currentNav.subnavs.map(subnav => <span>{subnav}  </span>)}</p>
        )
    }
}

export default SubNav;
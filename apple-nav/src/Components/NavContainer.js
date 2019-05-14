import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

class NavContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='navContainer'>
                {this.props.navs.map(nav => (
                    <Link to={`/${nav.route}`}> <Nav name={nav.displayName} /></Link>
                ))}
            </div>
        )
    }
}

export default NavContainer;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    
    currentColor() {
        return this.props.status === 'connected' ? 'green' : 'red'
    }
    render() {
        const connectiOnStyle = {
            width: '10px',
            height: '10px',
            backgroundColor: this.currentColor(),
            borderRadius: '50%',
            display: 'inline-block',
            marginLeft: '2rem'
        }
        return (
            <header>
                <h1>{this.props.title}<span style={connectiOnStyle}></span></h1>
            </header>
         );
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
 
export default Header;
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NavBar extends Component {
    static defaultProps = {
        title: 'GitHub Finder',
        icon: 'fab fa-github'
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }
    render() {
        return (
			<nav className="navbar bg-primary">
                <h1 className="fab fa-github">
                    <img src='/public/github-brands.svg' alt=''/>
                    <i className={this.props.icon} src="/public/github-brands.svg"> {this.props.title} </i>
                </h1>
            </nav>
        )
    }
}

export default NavBar

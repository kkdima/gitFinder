import React from "react";
import PropTypes from "prop-types";
import icon from './github-brands.svg';

const NavBar = ({title}) => {
	return (
		<nav className="navbar bg-primary">
            <img src={icon} alt="" className="icon" />
			<h1 className="fab fa-github header">
				{title}
			</h1>
		</nav>
	); 
};

NavBar.defaultProps = {
	title: "GitHub Finder",
};

NavBar.propTypes = {
	title: PropTypes.string.isRequired,
};

export default NavBar;

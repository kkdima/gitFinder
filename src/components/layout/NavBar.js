import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import logo from './entypoGithub.svg'
import { motion } from "framer-motion";


const NavBar = ({title, titleTwo, icon}) => {
	return (
		<nav className="navbar bg-primary navBar">
			<motion.div
				className='logo'
				initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
				animate={{ opacity: 1, x: 0, y: 25, scale: 1 }}
				transition={{
					ease: "easeOut",
					duration: 0.3,
				}}
			>
				<img id='iconLogo' src={logo} alt=''/>
				<h1 id="title">
					{title}
				</h1>
				<h1 id="title">
					{titleTwo}
				</h1>
			</motion.div>
			<ul>
				<li>
					<Link to ="/">Home</Link>
				</li>
				<li>
					<Link to ="/about">About</Link>
				</li>
			</ul>
		</nav>
	); 
};

NavBar.defaultProps = {
	title: "GitHub",
	titleTwo: 'Search',
	icon: "fab fa-github mx-1"
};

NavBar.propTypes = {
	title: PropTypes.string.isRequired,
	titleTwo: PropTypes.string.isRequired,
};

export default NavBar;

import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	return (
		<div className="card text-center">
			<img
				src={avatar_url}
				alt=""
				className="round-img"
				style={{ width: "76px" }}
			/>
			<h3 style={{ fontSize: "21px" }}>@{login}</h3>
			<div>
				<Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1 more">
					more
				</Link>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;

import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { username, avatar_url, website } }) => {
	return (
		<div className="card text-center">
			<img
				src={avatar_url}
				alt=""
				className="round-img"
				style={{ width: "60px" }}
			/>
			<h3>{username}</h3>
			<div>
				<a href={website} className="btn btn-dark btn-sm my-1">
					More
				</a>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;

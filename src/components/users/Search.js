import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";
import { motion } from "framer-motion";

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);

	const [text, setText] = useState("");

	const onSubmit = e => {
		e.preventDefault();
		if (text === "") {
			alertContext.setAlert("Please enter request", "light");
		} else {
			githubContext.searchUsers(text);
			setText("");
		}
	};

	const onChange = e => setText(e.target.value);

	return (
		<div>
			<form onSubmit={onSubmit} className='form'>
				<input
					className='inputSearch'
					type='text'
					name='text'
					placeholder='Search users'
					value={text}
					onChange={onChange}
				/>
				<motion.input 
					type='submit'
					name='Search'
					className='btn btn-dark btn-block submitButton'
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9, y: "5px" }}
				/>
			</form>
			{githubContext.users.length > 0 && (
				<motion.button
					className='btn btn-light btn-block clearButton'
					onClick={githubContext.clearUsers}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9, y: "5px" }}
				>
					Clear
				</motion.button>
			)}
		</div>
	);
};

export default Search;

import React from "react";
import "./app-title.css";

const AppTitle = props => {
	const titleValue = props.title;
	return <h1 className="title-h1">{titleValue}</h1>;
};

export default AppTitle;

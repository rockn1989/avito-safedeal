import React, { Component } from "react";
import "./app.css";

import AppTitle from "../app-title";
import ItemList from "../item-list";
import Modal from "../modal";

export default class App extends Component {
	render() {
		return (
			<div className="gallery-app">
				<AppTitle title={`test app`} />
				<ItemList />
				<Modal />
			</div>
		);
	}
}

import React, { Component } from "react";
import "./app.css";

import AppTitle from "../app-title";
import ItemList from "../item-list";
import Modal from "../modal";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			modalIsShow: false,
			id: null
		};
		this.onToggleModal = this.onToggleModal.bind(this);
	}

	onToggleModal(status, id) {
		this.setState({
			modalIsShow: status,
			id: id
		});
	}

	render() {
		const { modalIsShow, id } = this.state;
		let modal;
		if (modalIsShow) {
			modal = <Modal onToggleModal={this.onToggleModal} id={id} />;
		} else {
			modal = null;
		}

		return (
			<div className="gallery-app">
				<AppTitle title={`test app`} />
				<ItemList onToggleModal={this.onToggleModal} />
				{modal}
			</div>
		);
	}
}

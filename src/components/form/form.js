import React, { Component } from "react";
import ApiGallery from "../../utils/ApiGallery";
import "./form.css";

export default class Form extends Component {
	constructor() {
		super();
		this._sendData = new ApiGallery();
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
			send: false
		};
	}

	onSubmit(e) {
		const { _userName, _userComments } = this.refs;
		e.preventDefault();

		const form = document.getElementById(`form-comments`);
		const formData = new FormData(form);

		this.setState({
			send: true
		});

		const result = this._sendData.postResource(this.props.id, formData);
		console.log(result);
		result.then(status => {
			if (status) {
				_userName.value = ``;
				_userComments.value = ``;
			}

			this.setState({
				send: false
			});
		});
	}

	render() {
		return (
			<form
				id="form-comments"
				className="form-comments"
				onSubmit={this.onSubmit}
			>
				<input
					ref="_userName"
					type="text"
					name="user-name"
					placeholder="Ваше имя"
				/>
				<textarea
					ref="_userComments"
					name="user-message"
					placeholder="Ваш комментарий"
				></textarea>
				<button type="submit" disabled={this.state.send}>
					Отправить комментарий
				</button>
			</form>
		);
	}
}

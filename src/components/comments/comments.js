import React, { Component } from "react";
import "./comments.css";

export default class Comments extends Component {
	constructor() {
		super();
		this.parseDate = this.parseDate.bind(this);
	}

	parseDate(date) {
		return new Date(date).toLocaleString(`ru-RU`, {
			day: `numeric`,
			month: `numeric`,
			year: `numeric`
		});
	}

	renderComments() {
		return this.props.commentsList.map((el, idx) => {
			return (
				<li key={el.id + idx}>
					<div className="date">{this.parseDate(el.date)}</div>
					<div className="text">{el.text}</div>
				</li>
			);
		});
	}

	render() {
		const comment = this.renderComments();
		const content = comment.length > 0 ? comment : `No comments :(`;
		return <ul className="comments-list">{content}</ul>;
	}
}

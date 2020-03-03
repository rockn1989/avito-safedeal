import React, { Component } from "react";
import "./modal.css";

export default class Modal extends Component {
	render() {
		return (
			<div className="modal-layout">
				<div className="modal">
					<a href="#" className="modal-close"></a>
					<div className="modal-body">
						<div className="modal__img">
							<img src="https://via.placeholder.com/500x400" />
						</div>
						<div className="modal__comments">555</div>
						<div className="modal__form">123</div>
					</div>
				</div>
			</div>
		);
	}
}

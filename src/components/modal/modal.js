import React, { Component } from "react";
import "./modal.css";
import Form from "../form";
import Comments from "../comments";
import ApiGallery from "../../utils/ApiGallery";
import Spinner from "../spinner";

export default class Modal extends Component {
	constructor() {
		super();
		this._getData = new ApiGallery();
		this.onCloseModal = this.onCloseModal.bind(this);
		this.uploadData = this.uploadData.bind(this);
		this.onDataLoaded = this.onDataLoaded.bind(this);
		this.onCloseDocumentModal = this.onCloseDocumentModal.bind(this);
		this.onCloseDocumentModal();

		this.state = {
			loading: true,
			url: null,
			comments: []
		};
	}

	uploadData() {
		const id = this.props.id;
		this._getData.getDetailInfo(id).then(this.onDataLoaded);
	}

	onDataLoaded({ url, comments }) {
		this.setState({
			url: url,
			comments: comments,
			loading: false
		});
	}

	componentDidMount() {
		this.uploadData();
	}

	onCloseModal() {
		this.props.onToggleModal(false);
	}

	onCloseDocumentModal() {
		document.addEventListener("keydown", e => {
			if (e.keyCode === 27) {
				this.props.onToggleModal(false);
			}
		});
	}

	render() {
		const { url, comments, loading } = this.state;
		const { id } = this.props;

		const spinner = loading ? <Spinner /> : null;

		return (
			<div className="modal-layout">
				<div className="modal">
					<a
						href="#close"
						className="modal-close"
						onClick={() => {
							this.props.onToggleModal();
						}}
					>
						Close
					</a>
					<div className="modal-body">
						<div className="modal__img">
							{spinner}
							{loading ? "" : <img src={url} alt={id} />}
						</div>
						<div className="modal__comments">
							<Comments commentsList={comments} />
						</div>
						<div className="modal__form">
							<Form id={id} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

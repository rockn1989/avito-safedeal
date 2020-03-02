import React, { Component } from "react";
import "./item-list.css";
import ApiGallery from "../../utils/ApiGallery";
import Spinner from "../spinner";

export default class ItemList extends Component {
	constructor() {
		super();
		this._getData = new ApiGallery();

		this.state = {
			itemList: [],
			loading: true
		};

		this.onGalleryLoaded = this.onGalleryLoaded.bind(this);
		this.uploadGallery = this.uploadGallery.bind(this);
		this.onShowModal = this.onShowModal.bind(this);
	}

	componentDidMount() {
		this.uploadGallery();
	}

	onGalleryLoaded(items) {
		this.setState({
			itemList: items,
			loading: false
		});
	}

	uploadGallery() {
		this._getData
			.getImagesList()
			.then(this.onGalleryLoaded)
			.catch();
	}

	renderItems(arr) {
		return arr.map(({ id, url }) => {
			return (
				<li
					className="photo-gallery__item"
					key={id}
					onClick={() => {
						this.onShowModal(id);
					}}
				>
					<img src={url} />
				</li>
			);
		});
	}

	onShowModal(id) {
		this._getData.getDetailInfo(id).then(({ id, url, comments }) => {
			console.log(id, url, comments);
		});
	}

	render() {
		const { itemList, loading } = this.state;
		const spinner = loading ? <Spinner /> : null;
		const items = this.renderItems(itemList);

		return (
			<ul className="photo-gallery">
				{spinner}
				{items}
			</ul>
		);
	}
}

class ApiGallery {
	constructor() {
		this._apiBase = `https://boiling-refuge-66454.herokuapp.com`;
	}

	async getResourse(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Couuld not fetch ${url}, ${res.status}`);
		}

		const resBody = await res.json();
		return resBody;
	}

	async getImagesList() {
		const res = await this.getResourse(`/images/`);
		return res;
	}

	async getDetailInfo(id) {
		const res = await this.getResourse(`/images/${id}`);
		return res;
	}
}

export default ApiGallery;

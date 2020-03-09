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

	async postResource(id, data) {
		try {
			const response = await fetch(`${this._apiBase}/images/${id}/comments`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json;charset=utf-8"
				},
				body: JSON.stringify(data)
			});

			if (!response.ok) {
				throw new Error(`Ошибка соединения, ${response.status}`);
			}

			const body = await response.json();

			return body;
		} catch (err) {
			console.log(err);
		}
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

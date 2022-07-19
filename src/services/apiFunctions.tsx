const token = localStorage.getItem("login") || "";
const apiUrl = "http://localhost:5000/";

const api = {
	blog: {
		blogApiUrl: `${apiUrl}post`,

		updateOrNew: function (body: object, slug: string | undefined) {
			const method = slug ? "PUT" : "POST";
			let returnValue;

			fetch(`${this.blogApiUrl}`, {
				method: method,
				headers: {
					"Content-Type": "application/json",
					"x-access-token": token,
				},
				body: JSON.stringify(body),
			})
				.then((respons) => respons.json)
				.then((data) => {
					returnValue = data;
				})
				.catch((err) => {
					returnValue = err;
				});
		},
	},

	image: {
		imageApiUrl: `${apiUrl}image`,
	},
};

export default api;

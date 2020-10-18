import axios from "axios"

const base_url = "http://localhost:3000"


export function request(options) {
	const instance = axios.create({
		baseURL: base_url,
		timeout: 3000
	})

	instance.interceptors.response.use(response => {
		return response.data
	},err => {
		return err
	})

	return instance(options)
}

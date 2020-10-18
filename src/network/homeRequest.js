import {request} from "@/network/request"

export function getSwipe() {
	return request({
		url: '/banner',
		params: {
			type: 2
		}
	})
}


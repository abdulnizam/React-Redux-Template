import $ from 'jquery'

export const UPDATE_USER = 'user:update'
export const SHOW_ERROR = 'user:error'

export function updateUser(newuser) {
	return {
			type: UPDATE_USER,
			payload: {
				user: newuser
			}
		}
}

export function showError() {
	return {
		type: SHOW_ERROR,
		payload: {
			user: 'Error'
		}
	}
}

export function apiRequest() {
	return dispatch => {


		$.ajax({
			url: 'http://google.com',
			success(response) {
				dispatch(updateUser(response.results))
			},
			error() {
				dispatch(showError())
			}
		})
	}
}
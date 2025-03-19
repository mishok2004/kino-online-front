import { reducer as toastrReduser } from 'react-redux-toastr'

import { reducer as userReducer } from './user/user.slice'

export const reducers = {
	toastr: toastrReduser,
	user: userReducer,
}

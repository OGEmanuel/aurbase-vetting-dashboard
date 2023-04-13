import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		email: null,
        ip: null
	},
	reducers: {
		saveEmail: (state, { payload }) => {
			state.email = payload;
		},
		saveIp: (state, { payload }) => {
			state.ip = payload;
		},
	},
});

const { reducer, actions } = authSlice;
export const { saveEmail, saveIp } = actions;

export default reducer;

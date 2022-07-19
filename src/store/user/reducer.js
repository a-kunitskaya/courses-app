import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginAction(state, action) {
			state.isAuth = true;
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.token = action.payload.token;
		},
		logoutAction(state) {
			state = initialState;
		},
	},
});

export const { loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;

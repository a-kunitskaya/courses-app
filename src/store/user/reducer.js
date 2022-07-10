import { createSlice } from '@reduxjs/toolkit';
import actions from './actions';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: { ...actions },
});

export const { logInUser, logOut } = userSlice.actions;
export default userSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUser } from '../../services';

export const setUser = createAsyncThunk('user/setUser', async (thunkAPI) => {
	const token = localStorage.getItem('token');
	if (token) {
		const response = await getUser(token);
		return response.data.result;
	}
	return {};
});

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
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
			state.role = action.payload.role;
		},
		logoutAction(state) {
			state = initialState;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(setUser.fulfilled, (state, action) => {
			state.isAuth = true;
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.token = action.payload.token;
			state.role = action.payload.role;
		});
	},
});

export const { loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const authorsSlice = createSlice({
	name: 'authors',
	initialState: [],
	reducers: {
		addAuthorsAction(state, action) {
			state.push(action.payload);
		},
		setAuthorsAction(state, action) {
			return action.payload;
		},
	},
});

export const { addAuthorsAction, setAuthorsAction } = authorsSlice.actions;
export default authorsSlice.reducer;

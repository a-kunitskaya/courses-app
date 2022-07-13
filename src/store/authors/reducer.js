import { createSlice } from '@reduxjs/toolkit';

const authorsSlice = createSlice({
	name: 'authors',
	initialState: [],
	reducers: {
		addAuthorsAction(state, action) {
			state = state.concat(action.payload);
		},
	},
});

export const { addAuthorsAction } = authorsSlice.actions;
export default authorsSlice.reducer;

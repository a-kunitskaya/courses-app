import { createSlice } from '@reduxjs/toolkit';

const authorsSlice = createSlice({
	name: 'authors',
	initialState: [],
	reducers: {
		addAuthorAction(state, action) {
			state.push(action.payload);
		},
	},
});

export const { addAuthorsAction } = authorsSlice.actions;
export default authorsSlice.reducer;

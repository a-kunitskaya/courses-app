import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
	name: 'courses',
	initialState: [],
	reducers: {
		addCourseAction(state, action) {
			state.push(action.payload);
		},
	},
});

export const { addCourseAction } = coursesSlice.actions;
export default coursesSlice.reducer;

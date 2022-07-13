import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
	name: 'courses',
	initialState: [],
	reducers: {
		addCourseAction(state, action) {
			console.log('addCourseAction', state.concat(action.payload));
			state = state.concat(action.payload);
		},
	},
});

export const { addCourseAction } = coursesSlice.actions;
export default coursesSlice.reducer;

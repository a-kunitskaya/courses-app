import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
	name: 'courses',
	initialState: [],
	reducers: {
		addCourseAction(state, action) {
			state.push(action.payload);
		},
		setCoursesAction(state, action) {
			state = action.payload;
		},
	},
});

export const { addCourseAction, setCoursesAction } = coursesSlice.actions;
export default coursesSlice.reducer;

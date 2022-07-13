import { createSlice } from '@reduxjs/toolkit';
import courses from '../../components/Courses/Courses';

const coursesSlice = createSlice({
	name: 'courses',
	initialState: [],
	reducers: {
		addCourseAction(state, action) {
			console.log('adding action course', action.payload);
			state.push(action.payload);
			console.log('state', state);
		},
		setCoursesAction(state, action) {
			state = action.payload;
		},
		deleteCourseAction(state, action) {
			const courseId = action.payload;
			state = state.filter((course) => course.id !== courseId);
		},
	},
});

export const { addCourseAction, setCoursesAction, deleteCourseAction } =
	coursesSlice.actions;
export default coursesSlice.reducer;

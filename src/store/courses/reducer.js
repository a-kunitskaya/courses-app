import { createSlice } from '@reduxjs/toolkit';
import courses from '../../components/Courses/Courses';

const coursesSlice = createSlice({
	name: 'courses',
	initialState: [],
	reducers: {
		addCourseAction(state, action) {
			state.push(action.payload);
		},
		setCoursesAction(state, action) {
			console.log('in set courses action', action.payload);
			return action.payload;
		},
		deleteCourseAction(state, action) {
			const courseId = action.payload;
			return state.filter((course) => course.id !== courseId);
		},
	},
});

export const { addCourseAction, setCoursesAction, deleteCourseAction } =
	coursesSlice.actions;
export default coursesSlice.reducer;

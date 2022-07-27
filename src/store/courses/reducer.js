import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteCourse } from '../../services';
import { getToken } from '../../helpers';

export const deleteCourseById = createAsyncThunk(
	'courses/deleteCourseById',
	async (courseId, thunkAPI) => {
		const token = getToken();
		await deleteCourse(courseId, token);
		return courseId;
	}
);

const coursesSlice = createSlice({
	name: 'courses',
	initialState: [],
	reducers: {
		addCourseAction(state, action) {
			state.push(action.payload);
		},
		setCoursesAction(state, action) {
			return action.payload;
		},
		updateCourseAction(state, action) {
			const updatedCourse = action.payload;
			return state.map((course) =>
				course.id === updatedCourse.id ? updatedCourse : course
			);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(deleteCourseById.fulfilled, (state, action) => {
			const courseId = action.payload;
			return [...state].filter((course) => course.id !== courseId);
		});
	},
});

export const {
	addCourseAction,
	setCoursesAction,
	deleteCourseAction,
	updateCourseAction,
} = coursesSlice.actions;
export default coursesSlice.reducer;

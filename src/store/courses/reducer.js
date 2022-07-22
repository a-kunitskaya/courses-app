import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteCourse } from '../../services';

export const deleteCourseById = createAsyncThunk(
	'courses/deleteCourseById',
	async (courseId, thunkAPI) => {
		console.log('in thunk deleteCourse', courseId);
		const token = localStorage.getItem('token');
		const response = await deleteCourse(courseId, token);
		console.log('result thunk delete course', response);
		return response.data.result;
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
		deleteCourseAction(state, action) {
			const courseId = action.payload;
			return state.filter((course) => course.id !== courseId);
		},
		updateCourseAction(state, action) {
			console.log('in update action', JSON.stringify(state));
			const updatedCourse = action.payload;
			return state.map((course) =>
				course.id === updatedCourse.id ? updatedCourse : course
			);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(deleteCourseById.fulfilled, (state, action) => {
			console.log('yes delete course');
		});
		builder.addCase(deleteCourseById.pending, (state, action) => {
			console.log('pending delete course');
		});
		builder.addCase(deleteCourseById.rejected, (state, action) => {
			console.log('no delete course');
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

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/reducer';
import authorsReducer from './authors/reducer';
import coursesReducer from './courses/reducer';

export default configureStore({
	reducer: {
		user: userReducer,
		authors: authorsReducer,
		courses: coursesReducer,
	},
});

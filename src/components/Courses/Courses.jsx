import { useCallback, useEffect, useState } from 'react';

import { CourseCardsList, SearchBar } from './components';
import { Button } from '../../common';

import { Container, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Header } from '../index';
import { useTranslation } from 'react-i18next';
import { getAllAuthors, getAllCourses } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { setCoursesAction } from '../../store/courses/reducer';
import { setAuthorsAction } from '../../store/authors/reducer';

const Courses = () => {
	const navigate = useNavigate();
	const coursesSelector = useSelector((state) => state.courses);
	const authorsSelector = useSelector((state) => state.authors);
	const [courses, setCourses] = useState(coursesSelector);
	const [authors, setAuthors] = useState(authorsSelector);
	const dispatch = useDispatch();
	const { t } = useTranslation();

	const getCourses = useCallback(async () => {
		try {
			const {
				data: { result },
			} = await getAllCourses();
			dispatch(setCoursesAction(result));
			setCourses(result);
		} catch (err) {
			console.log('Failed to get courses', err);
		}
	}, []);

	const getAuthors = useCallback(async () => {
		try {
			const {
				data: { result },
			} = await getAllAuthors();
			dispatch(setAuthorsAction(result));
			setAuthors(result);
		} catch (err) {
			console.log('Failed to get authors', err);
		}
	}, []);

	useEffect(() => {
		getCourses();
		getAuthors();
	}, []);

	const onSearchHandler = (foundCourses) => {
		if (foundCourses.length) setCourses(foundCourses);
	};

	const addNewCourseHandler = () => navigate('/courses/add');

	return (
		<>
			<Header />
			<Container className='border border-primary'>
				<Stack direction='horizontal' gap={3}>
					<SearchBar coursesList={courses} onSearch={onSearchHandler} />
					<div className='ms-auto'>
						<Button
							text={t('courses.addNewCourseBtn')}
							onClick={addNewCourseHandler}
						/>
					</div>
				</Stack>
				<CourseCardsList courses={courses} authors={authors} />
			</Container>
		</>
	);
};
export default Courses;

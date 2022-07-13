import { useCallback, useEffect, useState } from 'react';

import { CourseCardsList, SearchBar } from './components';
import { Button } from '../../common';

import { Container, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Header } from '../index';
import { useTranslation } from 'react-i18next';
import { getAllAuthors, getAllCourses } from '../../services';

const Courses = () => {
	const navigate = useNavigate();
	const [courses, setCourses] = useState([]);
	const [authors, setAuthors] = useState([]);
	const { t } = useTranslation();

	const getCourses = useCallback(async () => {
		const res = await getAllCourses();
		const result = res.data.result;
		console.log('!!!!courses result', result);
		setCourses(result);
	}, []);

	const getAuthors = useCallback(async () => {
		const res = await getAllAuthors();
		const result = res.data.result;
		console.log('!!!!authors result', result);
		setAuthors(result);
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

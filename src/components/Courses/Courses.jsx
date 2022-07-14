import { CourseCardsList, SearchBar } from './components';
import { Button } from '../../common';

import { Container, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Header } from '../index';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Courses = ({ coursesList, authorsList }) => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const [searchResults, setSearchResults] = useState([]);

	const onSearchHandler = (foundCourses) => {
		if (foundCourses.length) setSearchResults(foundCourses);
	};

	const addNewCourseHandler = () => navigate('/courses/add');

	return (
		<>
			<Header />
			<Container className='border border-primary'>
				<Stack direction='horizontal' gap={3}>
					<SearchBar coursesList={coursesList} onSearch={onSearchHandler} />
					<div className='ms-auto'>
						<Button
							text={t('courses.addNewCourseBtn')}
							onClick={addNewCourseHandler}
						/>
					</div>
				</Stack>
				<CourseCardsList
					courses={searchResults.length ? searchResults : coursesList}
					authors={authorsList}
				/>
			</Container>
		</>
	);
};
export default Courses;

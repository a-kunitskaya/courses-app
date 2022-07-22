import { CourseCardsList, SearchBar } from './components';
import { Button } from '../../common';

import { Container, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Header } from '../index';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { isAdminUser } from '../../helpers';

const Courses = () => {
	const courses = useSelector((state) => state.courses);
	const navigate = useNavigate();
	const { t } = useTranslation();
	const user = useSelector((state) => state.user);

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
					<SearchBar onSearch={onSearchHandler} />
					<div className='ms-auto'>
						{isAdminUser(user) && (
							<Button
								text={t('courses.addNewCourseBtn')}
								onClick={addNewCourseHandler}
							/>
						)}
					</div>
				</Stack>
				<CourseCardsList
					courses={searchResults.length ? searchResults : courses}
				/>
			</Container>
		</>
	);
};
export default Courses;

import { useState } from 'react';

import { Button, Input } from '../../../../common';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const SearchBar = ({ onSearch }) => {
	const { t } = useTranslation();
	const courses = useSelector((state) => state.courses);
	const [searchInput, setSearchInput] = useState('');

	const searchInputHandler = (event) => setSearchInput(event.target.value);

	const searchHandler = (event) => {
		event.preventDefault();
		const foundCourses = courses.filter(
			(course) =>
				course.id.toLowerCase().includes(searchInput.toLowerCase()) ||
				course.title.toLowerCase().includes(searchInput.toLowerCase())
		);

		onSearch(foundCourses);
		setSearchInput('');
	};

	return (
		<Form className='m-3'>
			<Form.Group className='d-inline-flex'>
				<Input
					placeholderText={t('courses.searchInput.placeholder')}
					onChange={searchInputHandler}
					value={searchInput}
					className='border border-warning form-control-lg'
				/>
				<Button
					text={t('courses.searchInput.submitButton')}
					onClick={searchHandler}
				/>
			</Form.Group>
		</Form>
	);
};

export default SearchBar;

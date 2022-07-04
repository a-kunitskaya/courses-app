import { useState } from 'react';

import { Input, Button } from '../../../../common';

import {
	SEARCH_BAR_BTN_TXT,
	SEARCH_BAR_PLACEHOLDER_TXT,
} from '../../../../constants';
import { Form, Row } from 'react-bootstrap';

const SearchBar = ({ coursesList, onSearch }) => {
	const [searchInput, setSearchInput] = useState('');

	const searchInputHandler = (event) => setSearchInput(event.target.value);

	const searchHandler = (event) => {
		event.preventDefault();
		const foundCourses = coursesList.filter(
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
					placeholderText={SEARCH_BAR_PLACEHOLDER_TXT}
					onChange={searchInputHandler}
					value={searchInput}
					className='border border-warning form-control-lg'
				/>
				<Button text={SEARCH_BAR_BTN_TXT} onClick={searchHandler} />
			</Form.Group>
		</Form>
	);
};

export default SearchBar;

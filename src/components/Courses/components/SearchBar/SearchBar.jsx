import { useState } from 'react';

import { Input, Button } from '../../../../common';

import {
	SEARCH_BAR_BTN_TXT,
	SEARCH_BAR_PLACEHOLDER_TXT,
} from '../../../../constants';
import { Form, Row } from 'react-bootstrap';

const SearchBar = ({ coursesList, onSearch }) => {
	const [searchInput, setSearchInput] = useState('');

	const searchHandler = (event) => setSearchInput(event.target.value);

	const submitHandler = (event) => {
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
		<Form onSubmit={submitHandler} className='m-3'>
			<Form.Group className='d-inline-flex'>
				<Input
					placeholderText={SEARCH_BAR_PLACEHOLDER_TXT}
					onChange={searchHandler}
					value={searchInput}
					className='border border-warning form-control-lg'
				/>
				<Button type='submit' text={SEARCH_BAR_BTN_TXT} />
			</Form.Group>
		</Form>
	);
};

export default SearchBar;

import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';

import {
	SEARCH_BAR_BTN_TXT,
	SEARCH_BAR_PLACEHOLDER_TXT,
} from '../../../../constants';
import { useState } from 'react';

function SearchBar(props) {
	const { coursesList, authorsList } = props;
	const [searchInput, setSearchInput] = useState('');
	const searchHandler = (event) => {
		console.log('in search hand;er', event.target.value);
		setSearchInput(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const foundCourses = coursesList.filter(
			(course) =>
				course.id.toLowerCase().includes(searchInput.toLowerCase()) ||
				course.title.toLowerCase().includes(searchInput.toLowerCase())
		);

		//pass data to parent
		console.log('found courses: ', foundCourses);
		props.onSearch(foundCourses);
		setSearchInput('');
	};
	return (
		<form onSubmit={submitHandler}>
			<Input
				placeholderText={SEARCH_BAR_PLACEHOLDER_TXT}
				onChange={searchHandler}
				value={searchInput}
			/>
			<Button type='submit' text={SEARCH_BAR_BTN_TXT} />
		</form>
	);
}

export default SearchBar;

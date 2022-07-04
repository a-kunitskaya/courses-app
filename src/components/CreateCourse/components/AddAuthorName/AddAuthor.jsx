import { useState } from 'react';

import { Button, Input } from '../../../../common';

import {
	ADD_AUTHOR_NAME_INPUT_LBL_TXT,
	ADD_AUTHOR_NAME_INPUT_PLACEHOLDER_TXT,
	ADD_AUTHOR_NAME_MIN_CHARS_NUM,
	CREATE_AUTHOR_NAME_BTN_TXT,
} from '../../../../constants';
import { Card } from 'react-bootstrap';

const AddAuthor = ({ onAddAuthor }) => {
	const [addAuthorInput, setAddAuthorInput] = useState('');

	const addAuthorHandler = (event) => {
		event.preventDefault();
		const author = { name: addAuthorInput, id: Math.random() };
		onAddAuthor(author);
		setAddAuthorInput('');
	};

	const addAuthorInputHandler = (event) => {
		setAddAuthorInput(event.target.value);
	};

	return (
		<>
			<Card.Text className='h4 fw-bold text-center'>Add Author</Card.Text>
			<form onSubmit={addAuthorHandler}>
				<Input
					labelText={ADD_AUTHOR_NAME_INPUT_LBL_TXT}
					placeholderText={ADD_AUTHOR_NAME_INPUT_PLACEHOLDER_TXT}
					minLength={ADD_AUTHOR_NAME_MIN_CHARS_NUM}
					onChange={addAuthorInputHandler}
					value={addAuthorInput}
				/>
				<Button type='submit' text={CREATE_AUTHOR_NAME_BTN_TXT} />
			</form>
		</>
	);
};

export default AddAuthor;
import { useState } from 'react';

import { Button, Input } from '../../../../common';

import { ADD_AUTHOR_NAME_MIN_CHARS_NUM } from '../../../../constants';
import { Card, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const AddAuthor = ({ onAddAuthor }) => {
	const { t } = useTranslation();
	const [addAuthorInput, setAddAuthorInput] = useState('');

	const addAuthorHandler = (event) => {
		event.preventDefault();
		const author = { id: Math.random(), name: addAuthorInput };
		onAddAuthor(author);
		setAddAuthorInput('');
	};

	const addAuthorInputHandler = (event) => {
		setAddAuthorInput(event.target.value);
	};

	return (
		<>
			<Card.Text className='h4 fw-bold text-center'>Add Author</Card.Text>
			<Form>
				<Form.Group>
					<Input
						labelText={t('createCourse.inputAuthor.name')}
						placeholderText={t('createCourse.inputAuthor.placeholder')}
						minLength={ADD_AUTHOR_NAME_MIN_CHARS_NUM}
						onChange={addAuthorInputHandler}
						value={addAuthorInput}
						className='border border-warning'
					/>
					<Button
						className='my-2 d-flex'
						text={t('createCourse.createAuthorBtn')}
						onClick={addAuthorHandler}
					/>
				</Form.Group>
			</Form>
		</>
	);
};

export default AddAuthor;

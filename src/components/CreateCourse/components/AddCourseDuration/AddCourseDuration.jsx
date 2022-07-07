import { useState } from 'react';

import { Input } from '../../../../common';
import {
	DURATION_INPUT_LBL_TXT,
	DURATION_INPUT_PLACEHOLDER_TXT,
} from '../../../../constants';

import { getCourseDuration } from '../../../../helpers';
import { Card } from 'react-bootstrap';

const AddCourseDuration = ({ onAddDuration }) => {
	const [durationInput, setDurationInput] = useState('');

	const durationInputHandler = (event) => {
		event.preventDefault();
		setDurationInput(event.target.value);
		onAddDuration(durationInput);
	};

	return (
		<>
			<Card.Text className='h4 fw-bold text-center'>Duration</Card.Text>
			<Input
				labelText={DURATION_INPUT_LBL_TXT}
				placeholderText={DURATION_INPUT_PLACEHOLDER_TXT}
				type='number'
				min={1}
				onChange={durationInputHandler}
				value={durationInput}
				className='border border-warning'
			/>
			<Card.Text className='display-6 my-3'>
				Duration: {getCourseDuration(durationInput)}
			</Card.Text>
		</>
	);
};

export default AddCourseDuration;

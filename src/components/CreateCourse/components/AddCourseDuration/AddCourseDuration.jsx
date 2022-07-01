import { useState } from 'react';

import { Input } from '../../../../common';
import {
	DURATION_INPUT_LBL_TXT,
	DURATION_INPUT_PLACEHOLDER_TXT,
} from '../../../../constants';

import { getCourseDuration } from '../../../../helpers';

const AddCourseDuration = () => {
	const [durationInput, setDurationInput] = useState('');

	const durationInputHandler = (event) => {
		event.preventDefault();
		setDurationInput(event.target.value);
	};

	return (
		<>
			<h2>Duration</h2>
			<Input
				labelText={DURATION_INPUT_LBL_TXT}
				placeholderText={DURATION_INPUT_PLACEHOLDER_TXT}
				type='number'
				min={1}
				onChange={durationInputHandler}
				value={durationInput}
			/>
			<h4>Duration: {getCourseDuration(durationInput)}</h4>
		</>
	);
};

export default AddCourseDuration;

import { Input } from '../../../../common';

import { getCourseDuration } from '../../../../helpers';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const AddCourseDuration = ({ onAddDuration, duration }) => {
	const { t } = useTranslation();
	const durationInputHandler = (event) => onAddDuration(event.target.value);

	return (
		<>
			<Card.Text className='h4 fw-bold text-center'>Duration</Card.Text>
			<Input
				labelText={t('createCourse.inputDuration.name')}
				placeholderText={t('createCourse.inputDuration.placeholder')}
				type='number'
				min={1}
				onChange={durationInputHandler}
				value={duration}
				className='border border-warning'
			/>
			<Card.Text className='display-6 my-3'>
				{t('createCourse.durationHeading')}: {getCourseDuration(duration)}
			</Card.Text>
		</>
	);
};

export default AddCourseDuration;

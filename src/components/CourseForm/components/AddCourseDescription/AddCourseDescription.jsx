import { Textarea } from '../../../../common';

import { ADD_COURSE_DESCRIPTION_MIN_CHARS_NUM } from '../../../../constants';
import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const AddCourseDescription = ({ onAddDescription }) => {
	const { t } = useTranslation();
	const addDescriptionHandler = (event) => onAddDescription(event.target.value);
	return (
		<Col>
			<Textarea
				labelText={t('createCourse.inputDescription.name')}
				placeholderText={t('createCourse.inputDescription.placeholder')}
				minlength={ADD_COURSE_DESCRIPTION_MIN_CHARS_NUM}
				rows={5}
				className='border border-warning'
				onChange={addDescriptionHandler}
			/>
		</Col>
	);
};

export default AddCourseDescription;

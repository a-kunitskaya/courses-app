import { Textarea } from '../../../../common';

import {
	ADD_COURSE_DESCRIPTION_MIN_CHARS_NUM,
	ADD_COURSE_DESCRIPTION_TEXTAREA_LBL_TXT,
	ADD_COURSE_DESCRIPTION_TEXTAREA_PLACEHOLDER_TXT,
} from '../../../../constants';
import { Col } from 'react-bootstrap';

const AddCourseDescription = ({ onAddDescription }) => {
	const addDescriptionHandler = (event) => onAddDescription(event.target.value);
	return (
		<Col>
			<Textarea
				labelText={ADD_COURSE_DESCRIPTION_TEXTAREA_LBL_TXT}
				placeholderText={ADD_COURSE_DESCRIPTION_TEXTAREA_PLACEHOLDER_TXT}
				minlength={ADD_COURSE_DESCRIPTION_MIN_CHARS_NUM}
				rows={5}
				className='border border-warning'
				onChange={addDescriptionHandler}
			/>
		</Col>
	);
};

export default AddCourseDescription;

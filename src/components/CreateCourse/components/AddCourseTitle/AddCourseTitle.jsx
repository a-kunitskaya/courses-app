import { Button, Input } from '../../../../common';

import {
	ADD_COURSE_TITLE_INPUT_LBL_TXT,
	ADD_COURSE_TITLE_INPUT_PLACEHOLDER_TXT,
	CREATE_COURSE_BTN_LBL_TXT,
} from '../../../../constants';
import { Col, Form } from 'react-bootstrap';

const AddCourseTitle = ({ onAddTitle, onCreateCourse }) => {
	const addTitleHandler = (event) => onAddTitle(event.target.value);

	return (
		<Form className='d-inline-flex'>
			<Col md='auto'>
				<Form.Group>
					<Input
						labelText={ADD_COURSE_TITLE_INPUT_LBL_TXT}
						placeholderText={ADD_COURSE_TITLE_INPUT_PLACEHOLDER_TXT}
						className='border border-dark'
						onChange={addTitleHandler}
					/>
				</Form.Group>
			</Col>
			<Col />
			<Col md='auto'>
				<Button text={CREATE_COURSE_BTN_LBL_TXT} onClick={onCreateCourse} />
			</Col>
		</Form>
	);
};

export default AddCourseTitle;

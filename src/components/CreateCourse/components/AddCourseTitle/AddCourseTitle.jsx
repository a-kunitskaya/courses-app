import { Button, Input } from '../../../../common';

import {
	ADD_COURSE_TITLE_INPUT_LBL_TXT,
	ADD_COURSE_TITLE_INPUT_PLACEHOLDER_TXT,
	CREATE_COURSE_BTN_LBL_TXT,
} from '../../../../constants';

const AddCourseTitle = () => {
	return (
		<>
			<Input
				labelText={ADD_COURSE_TITLE_INPUT_LBL_TXT}
				placeholderText={ADD_COURSE_TITLE_INPUT_PLACEHOLDER_TXT}
			/>
			<Button text={CREATE_COURSE_BTN_LBL_TXT} />
		</>
	);
};

export default AddCourseTitle;

import { Textarea } from '../../../../common';

import {
	ADD_COURSE_DESCRIPTION_MIN_CHARS_NUM,
	ADD_COURSE_DESCRIPTION_TEXTAREA_LBL_TXT,
	ADD_COURSE_DESCRIPTION_TEXTAREA_PLACEHOLDER_TXT,
} from '../../../../constants';

const AddCourseDescription = () => (
	<Textarea
		labelText={ADD_COURSE_DESCRIPTION_TEXTAREA_LBL_TXT}
		placeholderText={ADD_COURSE_DESCRIPTION_TEXTAREA_PLACEHOLDER_TXT}
		minlength={ADD_COURSE_DESCRIPTION_MIN_CHARS_NUM}
	/>
);

export default AddCourseDescription;

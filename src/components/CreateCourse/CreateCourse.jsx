import AuthorItem from './components/AuthorItem/AuthorItem';
import { Input } from '../../common/Input/Input';
import { Textarea } from '../../common/Textarea/Textarea';
import { Button } from '../../common/Button/Button';

import {
	ACTIONS,
	ADD_AUTHOR_NAME_INPUT_LBL_TXT,
	ADD_AUTHOR_NAME_INPUT_PLACEHOLDER_TXT,
	ADD_AUTHOR_NAME_MIN_CHARS_NUM,
	ADD_COURSE_DESCRIPTION_MIN_CHARS_NUM,
	ADD_COURSE_DESCRIPTION_TEXTAREA_LBL_TXT,
	ADD_COURSE_DESCRIPTION_TEXTAREA_PLACEHOLDER_TXT,
	ADD_COURSE_TITLE_INPUT_LBL_TXT,
	ADD_COURSE_TITLE_INPUT_PLACEHOLDER_TXT,
	AUTHOR_LIST_EMPTY_TXT,
	CREATE_AUTHOR_NAME_BTN_TXT,
	CREATE_COURSE_BTN_LBL_TXT,
	DURATION_INPUT_LBL_TXT,
	DURATION_INPUT_PLACEHOLDER_TXT,
} from '../../constants';
import getCourseDuration from '../../helpers/getCourseDuration';

const getAuthorItems = ({ authorsList, action }) =>
	authorsList.map((author) => {
		return (
			<li key={author.id}>
				<AuthorItem name={author.name} action={action} />
			</li>
		);
	});

const courseAuthorsList = [];
function addAuthorHandler(props) {
	const { author } = props;
	courseAuthorsList.push(author);
}
function CreateCourse(props) {
	const { authorsList } = props;
	return (
		<div>
			<Input
				labelText={ADD_COURSE_TITLE_INPUT_LBL_TXT}
				placeholderText={ADD_COURSE_TITLE_INPUT_PLACEHOLDER_TXT}
			/>
			<Button text={CREATE_COURSE_BTN_LBL_TXT} />
			<Textarea
				labelText={ADD_COURSE_DESCRIPTION_TEXTAREA_LBL_TXT}
				placeholderText={ADD_COURSE_DESCRIPTION_TEXTAREA_PLACEHOLDER_TXT}
				minlength={ADD_COURSE_DESCRIPTION_MIN_CHARS_NUM}
			/>
			<div>
				<h2>Add author</h2>
				<Input
					labelText={ADD_AUTHOR_NAME_INPUT_LBL_TXT}
					placeholderText={ADD_AUTHOR_NAME_INPUT_PLACEHOLDER_TXT}
					minLength={ADD_AUTHOR_NAME_MIN_CHARS_NUM}
				/>
				<Button text={CREATE_AUTHOR_NAME_BTN_TXT} onClick={addAuthorHandler} />
			</div>
			<div>
				<h2>Duration</h2>
				<Input
					labelText={DURATION_INPUT_LBL_TXT}
					placeholderText={DURATION_INPUT_PLACEHOLDER_TXT}
					type='number'
					min={1}
				/>
				<Button text={CREATE_AUTHOR_NAME_BTN_TXT} />
				<h4>Duration: {getCourseDuration(123)}</h4>
			</div>
			<div>
				<h2>Authors</h2>
				<ul>{getAuthorItems({ authorsList, action: ACTIONS.ADD })}</ul>
			</div>
			<div>
				<h2>Course authors</h2>
				{!courseAuthorsList.length && <p>{AUTHOR_LIST_EMPTY_TXT}</p>}
				<ul>{getAuthorItems({ authorsList, action: ACTIONS.DELETE })}</ul>
			</div>
		</div>
	);
}
export default CreateCourse;

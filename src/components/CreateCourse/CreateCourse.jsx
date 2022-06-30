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
import { useState } from 'react';

const getAuthorItem = ({ author, action, onClick }) => {
	return (
		<li key={author.id}>
			<AuthorItem name={author.name} action={action} onClick={onClick} />
		</li>
	);
};

function CreateCourse(props) {
	const { authorsList } = props;
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [availableAuthors, setAvailableAuthors] = useState(authorsList);
	const [addAuthorInput, setAddAuthorInput] = useState('');
	const [durationInput, setDurationInput] = useState('');

	function addAuthorHandler(event) {
		event.preventDefault();
		console.log('in add author handler', availableAuthors);
		setAvailableAuthors((prevState) => [
			...prevState,
			{ name: addAuthorInput, id: Math.random() },
		]);

		console.log('in add author handler', availableAuthors);
		setAddAuthorInput('');
	}

	function addAuthorInputHandler(event) {
		console.log('in add author INPUT handler', event.target.value);
		setAddAuthorInput(event.target.value);
	}

	function addCourseAuthorHandler(author) {
		setCourseAuthors((prevState) => [author, ...prevState]);
		setAvailableAuthors((prevState) =>
			prevState.filter((item) => item.id !== author.id)
		);
	}

	function deleteCourseAuthorHandler(author) {
		setCourseAuthors((prevState) =>
			prevState.filter((item) => item.id !== author.id)
		);
		setAvailableAuthors((prevState) => [author, ...prevState]);
	}

	function durationInputHandler(event) {
		event.preventDefault();
		setDurationInput(event.target.value);
	}

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
			<form onSubmit={addAuthorHandler}>
				<Input
					labelText={ADD_AUTHOR_NAME_INPUT_LBL_TXT}
					placeholderText={ADD_AUTHOR_NAME_INPUT_PLACEHOLDER_TXT}
					minLength={ADD_AUTHOR_NAME_MIN_CHARS_NUM}
					onChange={addAuthorInputHandler}
					value={addAuthorInput}
				/>
				<Button type='submit' text={CREATE_AUTHOR_NAME_BTN_TXT} />
			</form>
			<div>
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
			</div>
			<div>
				<h2>Authors</h2>
				<ul>
					{availableAuthors.map((author) => {
						return getAuthorItem({
							author,
							action: ACTIONS.ADD,
							onClick: () => addCourseAuthorHandler(author),
						});
					})}
				</ul>
			</div>
			<div>
				<h2>Course authors</h2>
				{!courseAuthors.length && <p>{AUTHOR_LIST_EMPTY_TXT}</p>}
				<ul>
					{courseAuthors.map((author) => {
						return getAuthorItem({
							author,
							action: ACTIONS.DELETE,
							onClick: () => deleteCourseAuthorHandler(author),
						});
					})}
				</ul>
			</div>
		</div>
	);
}
export default CreateCourse;

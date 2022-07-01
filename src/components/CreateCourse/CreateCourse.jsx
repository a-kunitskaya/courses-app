import { useState } from 'react';

import {
	AddCourseTitle,
	AddCourseDescription,
	AddAuthor,
	AddCourseDuration,
	AvailableAuthors,
	CourseAuthors,
} from './components';

const CreateCourse = ({ authorsList }) => {
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [availableAuthors, setAvailableAuthors] = useState(authorsList);

	const onAddAuthorHandler = (author) =>
		setAvailableAuthors((prevState) => [author, ...prevState]);

	const onAddCourseAuthorHandler = (author) => {
		setCourseAuthors((prevState) => [author, ...prevState]);

		setAvailableAuthors((prevState) =>
			prevState.filter((item) => item.id !== author.id)
		);
	};

	const onDeleteCourseAuthorHandler = (author) => {
		setCourseAuthors((prevState) =>
			prevState.filter((item) => item.id !== author.id)
		);
		setAvailableAuthors((prevState) => [author, ...prevState]);
	};

	return (
		<div>
			<AddCourseTitle />
			<AddCourseDescription />
			<AddAuthor onAddAuthor={onAddAuthorHandler} />
			<AddCourseDuration />
			<AvailableAuthors
				availableAuthors={availableAuthors}
				onAddCourseAuthor={onAddCourseAuthorHandler}
			/>
			<CourseAuthors
				courseAuthors={courseAuthors}
				onDeleteCourseAuthor={onDeleteCourseAuthorHandler}
			/>
		</div>
	);
};
export default CreateCourse;

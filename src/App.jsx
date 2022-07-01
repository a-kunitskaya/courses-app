import { useState } from 'react';

import { Header, Courses, CreateCourse } from './components';

import { mockedCoursesList, mockedAuthorsList } from './helpers/getMockedData';

const RENDERING_OPS = {
	CREATE_COURSE: true,
	COURSE_CARDS: false,
};

function App() {
	const [createCourseClicked, setCreateCourseClicked] = useState(false);

	const renderConditionally = () => {
		switch (createCourseClicked) {
			case RENDERING_OPS.CREATE_COURSE:
				return <CreateCourse authorsList={mockedAuthorsList} />;
			case RENDERING_OPS.COURSE_CARDS:
				return (
					<Courses
						onCreateCourseBtnClick={onCreateCourseBtnClicked}
						coursesList={mockedCoursesList}
						authorsList={mockedAuthorsList}
					/>
				);
			default:
				console.error('Error in conditional rendering');
		}
	};

	const onCreateCourseBtnClicked = (isClicked) => {
		setCreateCourseClicked(isClicked);
	};

	return (
		<div>
			<Header />
			{renderConditionally()}
		</div>
	);
}

export default App;

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

import { mockedCoursesList, mockedAuthorsList } from './helpers/getMockedData';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { useState } from 'react';

function App() {
	const [createCourseBtnClicked, setcreateCourseBtnClicked] = useState(false);

	const onCreateCourseBtnClick = () => {
		console.log('createCourse clicked');
		setcreateCourseBtnClicked(true);
	};

	return (
		<div>
			<Header />

			{createCourseBtnClicked ? (
				<CreateCourse authorsList={mockedAuthorsList} />
			) : (
				<Courses
					onCreateCourseBtnClick={onCreateCourseBtnClick}
					coursesList={mockedCoursesList}
					authorsList={mockedAuthorsList}
				/>
			)}
		</div>
	);
}

export default App;

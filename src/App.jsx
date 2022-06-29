import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

import { mockedCoursesList, mockedAuthorsList } from './helpers/getMockedData';
import CreateCourse from './components/CreateCourse/CreateCourse';

const createNewCourseClicked = false;

function App() {
	return (
		<div>
			<Header />
			{createNewCourseClicked ? (
				<CreateCourse authorsList={mockedAuthorsList} />
			) : (
				<Courses
					coursesList={mockedCoursesList}
					authorsList={mockedAuthorsList}
				/>
			)}
		</div>
	);
}

export default App;

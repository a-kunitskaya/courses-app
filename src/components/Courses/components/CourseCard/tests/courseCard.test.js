import React from 'react';
import { render, screen } from '@testing-library/react';

import CourseCard from '../CourseCard';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import i18n from '../../../../../i18n'; //the import is needed as the init is used it the test

describe('CourseCard', () => {
	let store;
	const authors = [
		{
			name: 'author name',
			id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
		},
	];
	const course = {
		title: 'title',
		description: 'description',
		creationDate: '9/3/2021',
		duration: 30,
		authors: ['9b87e8b8-6ba5-40fc-a439-c4e30a373d36'],
		id: '66cc289e-6de9-49b2-9ca7-8b4f409d6467',
	};
	const user = { name: 'Test User' };

	beforeAll(() => {
		const mockStore = configureStore();
		store = mockStore({
			authors,
			user,
		});
	});

	test('title is displayed', () => {
		render(
			<Provider store={store}>
				<MemoryRouter initialEntries={['/']}>
					<CourseCard course={course} />
				</MemoryRouter>
			</Provider>
		);

		const title = screen.getByText(course.title);
		expect(title).toBeInTheDocument();
	});

	test('description is displayed', () => {
		render(
			<Provider store={store}>
				<MemoryRouter initialEntries={['/']}>
					<CourseCard course={course} />
				</MemoryRouter>
			</Provider>
		);

		const description = screen.getByText(course.description);
		expect(description).toBeInTheDocument();
	});

	test('duration is displayed', () => {
		render(
			<Provider store={store}>
				<MemoryRouter initialEntries={['/']}>
					<CourseCard course={course} />
				</MemoryRouter>
			</Provider>
		);

		const formattedDuration = '00:30 hours';
		const duration = screen.getByText(formattedDuration, { exact: false });
		expect(duration).toBeInTheDocument();
	});

	test('authors list is displayed', () => {
		render(
			<Provider store={store}>
				<MemoryRouter initialEntries={['/']}>
					<CourseCard course={course} />
				</MemoryRouter>
			</Provider>
		);

		const expectedAuthorName = authors[0].name;
		const author = screen.getByText(expectedAuthorName, { exact: false });
		expect(author).toBeInTheDocument();
	});

	test('created date is displayed', () => {
		render(
			<Provider store={store}>
				<MemoryRouter initialEntries={['/']}>
					<CourseCard course={course} />
				</MemoryRouter>
			</Provider>
		);

		const formattedCreationDate = '09/03/2021';
		const creationDate = screen.getByText(formattedCreationDate, {
			exact: false,
		});
		expect(creationDate).toBeInTheDocument();
	});
});

import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from '../Header';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import i18n from '../../../i18n'; //the import is needed as the init is used it the test

describe('Header', () => {
	let store;
	const username = 'Test User';

	beforeAll(() => {
		const mockStore = configureStore();
		store = mockStore({ user: { name: username } });
	});

	test('username is displayed', () => {
		render(
			<Provider store={store}>
				<MemoryRouter initialEntries={['/']}>
					<Header />
				</MemoryRouter>
			</Provider>
		);

		const actualUsername = screen.getByText(username);
		expect(actualUsername).toBeInTheDocument();
	});

	test('Logo is displayed', () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			</Provider>
		);

		const logo = screen.getByAltText('logo');
		expect(logo).toBeInTheDocument();
	});
});

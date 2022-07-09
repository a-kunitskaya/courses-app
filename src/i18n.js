import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
	fallbackLng: 'en',
	debug: true,

	interpolation: {
		escapeValue: false,
	},
	resources: {
		en: {
			translation: {
				registration: {
					heading: 'Registration',
					inputName: {
						name: 'Name',
						placeholder: 'Enter name',
					},
					inputEmail: {
						name: 'Email',
						placeholder: 'Enter email',
					},
					inputPassword: {
						name: 'Password',
						placeholder: 'Enter password',
					},
					submitButton: 'Registration',
					bottomText: 'If you have an account, you can ',
					bottomTextLink: 'Login',
					alert: 'Failed to register, reason: ',
				},
				login: {
					heading: 'Login',
					inputEmail: {
						name: 'Email',
						placeholder: 'Enter email',
					},
					inputPassword: {
						name: 'Password',
						placeholder: 'Enter password',
					},
					submitButton: 'Login',
					bottomText: "If you don't have an account, you can ",
					bottomTextLink: 'Register',
					alert: 'Failed to log in, reason: ',
				},
				header: {
					logoutBtnTxt: 'Logout',
				},
				user: {
					defaultUsername: 'Guest',
				},
				courseInfo: {
					authors: 'Authors',
					created: 'Created',
					duration: 'Duration',
					id: 'ID',
					backToCoursesBtn: 'Back to courses',
				},
				courses: {
					authors: 'Authors',
					created: 'Created',
					duration: 'Duration',
				},
				createCourse: {
					courseAuthors: 'Course authors',
				},
			},
		},
	},
});

export default i18n;

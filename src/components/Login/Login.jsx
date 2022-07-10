import { Button, Input } from '../../common';
import { Alert, Container, Form, FormGroup } from 'react-bootstrap';
import { Header } from '../index';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { login } from '../../services';

const Login = () => {
	const { t } = useTranslation();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const emailInputHandler = (event) => setEmail(event.target.value);
	const passwordInputHandler = (event) => setPassword(event.target.value);

	const logIn = async (user) => {
		try {
			const { data } = await login(user);

			localStorage.setItem('token', data.result);
			localStorage.setItem('username', data.user.name);

			navigate('/courses');
		} catch (err) {
			setError(err.message);
			console.error('login error', err);
		}
	};

	const submitHandler = async (event) => {
		event.preventDefault();
		setError('');

		await logIn({ email, password });

		setEmail('');
		setPassword('');
	};

	return (
		<div>
			<Header />
			<Container className='d-flex justify-content-center align-items-center p-5 border border-primary'>
				<Form onSubmit={submitHandler}>
					<Form.Label className='h3 d-flex justify-content-center'>
						Login
					</Form.Label>
					<FormGroup>
						<Input
							type='email'
							labelText={t('login.inputEmail.name')}
							placeholderText={t('login.inputEmail.placeholder')}
							className='border border-warning mb-2'
							onChange={emailInputHandler}
							value={email}
						/>
						<Input
							type='password'
							labelText={t('login.inputPassword.name')}
							placeholderText={t('login.inputPassword.placeholder')}
							className='border border-warning mb-2'
							onChange={passwordInputHandler}
							value={password}
						/>
						<div className='my-3 d-flex justify-content-center'>
							<Button text={t('login.submitButton')} type='submit'></Button>
						</div>
						<Form.Text>
							{t('login.bottomText')}
							<Link to='/registration'>{t('login.bottomTextLink')}</Link>
						</Form.Text>
					</FormGroup>
				</Form>
			</Container>
			{error && (
				<Alert variant='danger'>
					{t('login.alert')}
					{error}
				</Alert>
			)}
		</div>
	);
};

export default Login;

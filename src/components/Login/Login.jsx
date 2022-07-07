import { Button, Input } from '../../common';
import { Alert, Container, Form, FormGroup } from 'react-bootstrap';
import { Header } from '../index';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const emailInputHandler = (event) => setEmail(event.target.value);
	const passwordInputHandler = (event) => setPassword(event.target.value);

	const logIn = async (user) => {
		try {
			const { data } = await axios.post('/login', user);
			localStorage.setItem('token', data.result);

			// Uladzislau, I'm not not sure if localStorage is a good place to store username in,
			// where should I store it instead?
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
							labelText='Email'
							placeholderText='Enter email'
							className='border border-warning mb-2'
							onChange={emailInputHandler}
							value={email}
						/>
						<Input
							type='password'
							labelText='Password'
							placeholderText='Enter password'
							className='border border-warning mb-2'
							onChange={passwordInputHandler}
							value={password}
						/>
						<div className='my-3 d-flex justify-content-center'>
							<Button text='Login' type='submit'></Button>
						</div>
						<Form.Text>
							If you don't have an account, you can
							<Link to='/registration'>Register</Link>
						</Form.Text>
					</FormGroup>
				</Form>
			</Container>
			{error && (
				<Alert variant='danger'>Failed to register, reason: {error}</Alert>
			)}
		</div>
	);
};

export default Login;

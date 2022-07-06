import { Button, Input } from '../../common';
import { Alert, Container, Form, FormGroup } from 'react-bootstrap';
import { Header } from '../index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const nameInputHandler = (event) => setName(event.target.value);
	const emailInputHandler = (event) => setEmail(event.target.value);
	const passwordInputHandler = (event) => setPassword(event.target.value);

	const createUser = async (user) => {
		try {
			await axios.post('/register', user);
			navigate('/login');
		} catch (err) {
			setError(err.message);
			console.error('registration error', err);
		}
	};

	const submitHandler = async (event) => {
		event.preventDefault();
		setError('');

		await createUser({ name, email, password });

		setName('');
		setEmail('');
		setPassword('');
	};

	const inputFields = [
		{
			type: 'text',
			label: 'Name',
			placeholder: 'Enter name',
			onChange: nameInputHandler,
			value: name,
		},
		{
			type: 'email',
			label: 'Email',
			placeholder: 'Enter email',
			onChange: emailInputHandler,
			value: email,
		},
		{
			type: 'password',
			label: 'Password',
			placeholder: 'Enter password',
			onChange: passwordInputHandler,
			value: password,
		},
	];
	return (
		<div>
			<Header isEmpty='true' />
			<Container className='d-flex justify-content-center align-items-center p-5 border border-primary'>
				<Form onSubmit={submitHandler}>
					<Form.Label className='h3 d-flex justify-content-center'>
						Registration
					</Form.Label>
					<FormGroup>
						{inputFields.map((data) => (
							<Input
								type={data.type}
								labelText={data.label}
								placeholderText={data.placeholder}
								onChange={data.onChange}
								value={data.value}
								className='border border-warning mb-2'
							/>
						))}
						<div className='my-3 d-flex justify-content-center'>
							<Button text='Registration' type='submit' />
						</div>
						<Form.Text>
							If you have an account, you can <a href='#'>Login</a>
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

export default Registration;

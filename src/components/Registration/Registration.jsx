import { Button, Input } from '../../common';
import { Alert, Container, Form, FormGroup } from 'react-bootstrap';
import { Header } from '../index';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../services';
import { useTranslation } from 'react-i18next';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { t } = useTranslation();

	const navigate = useNavigate();

	const nameInputHandler = (event) => setName(event.target.value);
	const emailInputHandler = (event) => setEmail(event.target.value);
	const passwordInputHandler = (event) => setPassword(event.target.value);

	const createUser = async (user) => {
		try {
			await register(user);
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
			label: t('registration.inputName.name'),
			placeholder: t('registration.inputName.placeholder'),
			onChange: nameInputHandler,
			value: name,
		},
		{
			type: 'email',
			label: t('registration.inputEmail.name'),
			placeholder: t('registration.inputEmail.placeholder'),
			onChange: emailInputHandler,
			value: email,
		},
		{
			type: 'password',
			label: t('registration.inputPassword.name'),
			placeholder: t('registration.inputPassword.placeholder'),
			onChange: passwordInputHandler,
			value: password,
		},
	];
	return (
		<div>
			<Header />
			<Container className='d-flex justify-content-center align-items-center p-5 border border-primary'>
				<Form onSubmit={submitHandler}>
					<Form.Label className='h3 d-flex justify-content-center'>
						{t('registration.heading')}
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
							<Button text={t('registration.submitButton')} type='submit' />
						</div>
						<Form.Text>
							{t('registration.bottomText')}{' '}
							<Link to='/login'>{t('registration.bottomTextLink')}</Link>
						</Form.Text>
					</FormGroup>
				</Form>
			</Container>
			{error && (
				<Alert variant='danger'>
					{t('registration.alert')}
					{error}
				</Alert>
			)}
		</div>
	);
};

export default Registration;

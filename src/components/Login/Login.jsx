import { Button, Input } from '../../common';
import { Container, Form, FormGroup } from 'react-bootstrap';
import { Header } from '../index';

const Login = () => {
	return (
		<div>
			<Header isEmpty='true' />
			<Container className='d-flex justify-content-center align-items-center p-5 border border-primary'>
				<Form>
					<Form.Label className='h3 d-flex justify-content-center'>
						Login
					</Form.Label>
					<FormGroup>
						<Input
							type='email'
							labelText='Email'
							placeholderText='Enter email'
							className='border border-warning mb-2'
						/>
						<Input
							type='password'
							labelText='Password'
							placeholderText='Enter password'
							className='border border-warning mb-2'
						/>
						<div className='my-3 d-flex justify-content-center'>
							<Button text='Login'></Button>
						</div>
						<Form.Text>
							If you don't have an account, you can <a href='#'>Register</a>
						</Form.Text>
					</FormGroup>
				</Form>
			</Container>
		</div>
	);
};

export default Login;

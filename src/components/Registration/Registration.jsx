import { Button, Input } from '../../common';
import { Container, Form, FormGroup } from 'react-bootstrap';
import { Header } from '../index';

const Registration = () => {
	//TODO: Request should be sent by submit event. Use onSubmit props for form.
	return (
		<div>
			<Header isEmpty='true' />
			<Container className='d-flex justify-content-center align-items-center p-5 border border-primary'>
				<Form>
					<Form.Label className='h3 d-flex justify-content-center'>
						Registration
					</Form.Label>
					<FormGroup>
						<Input
							labelText='Name'
							placeholderText='Enter Name'
							className='border border-warning mb-2'
						/>
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
							className='border border-warning mb2'
						/>
						<div className='my-3 d-flex justify-content-center'>
							<Button text='Registration'></Button>
						</div>
						<Form.Text>
							If you have an account, you can <a href='#'>Login</a>
						</Form.Text>
					</FormGroup>
				</Form>
			</Container>
		</div>
	);
};

export default Registration;

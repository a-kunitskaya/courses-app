import { Button, Input } from '../../common';
import { Container, Form, FormGroup } from 'react-bootstrap';

const Registration = () => {
	return (
		<Container className='d-flex justify-content-center'>
			<Form>
				<Form.Label className='h3 d-flex justify-content-center'>
					Registration
				</Form.Label>
				<FormGroup>
					<Input
						labelText='Name'
						placeholderText='Enter Name'
						className='border border-warning'
					/>
					<Input
						labelText='Email'
						placeholderText='Enter email'
						className='border border-warning'
					/>
					<Input
						labelText='Password'
						placeholderText='Enter password'
						className='border border-warning'
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
	);
};

export default Registration;

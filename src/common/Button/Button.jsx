import { Button } from 'react-bootstrap';

const btn = ({ text, onClick }) => (
	<Button variant='outline-primary' className='mx-1' onClick={onClick}>
		{text}
	</Button>
);

export default btn;

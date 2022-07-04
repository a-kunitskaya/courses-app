import { Button } from 'react-bootstrap';

const btn = ({ text, onClick, className }) => (
	<Button
		variant='outline-primary'
		className={`mx-1 ${className}`}
		onClick={onClick}
	>
		{text}
	</Button>
);

export default btn;

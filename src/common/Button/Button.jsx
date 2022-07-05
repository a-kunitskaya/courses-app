import { Button as BootstrapButton } from 'react-bootstrap';

const Button = ({ text, onClick, className }) => (
	<BootstrapButton
		variant='outline-primary'
		className={`mx-1 ${className}`}
		onClick={onClick}
	>
		{text}
	</BootstrapButton>
);

export default Button;

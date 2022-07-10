import { Button as BootstrapButton } from 'react-bootstrap';

const Button = ({ text, onClick, className, type }) => (
	<BootstrapButton
		variant='outline-primary'
		className={`mx-1 ${className}`}
		onClick={onClick}
		type={type}
	>
		{text}
	</BootstrapButton>
);

export default Button;

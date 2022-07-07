import { Button as BootstrapButton } from 'react-bootstrap';

const Button = ({ text = 'Submit', onClick, className, type }) => (
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

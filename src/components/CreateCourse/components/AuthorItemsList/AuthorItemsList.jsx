import { AuthorItem } from '../index';

const AuthorItemsList = ({ authors, handler, action }) => (
	<ul>
		{authors.map((author) => (
			<li key={author.id}>
				<AuthorItem
					name={author.name}
					action={action}
					onClick={() => handler(author)}
				/>
			</li>
		))}
	</ul>
);

export default AuthorItemsList;

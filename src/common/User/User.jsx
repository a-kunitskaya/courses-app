const TEST_USER_NAME = 'Guest';

const User = ({ username }) => <p>{username || TEST_USER_NAME}</p>;

export default User;

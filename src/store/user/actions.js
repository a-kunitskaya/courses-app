const logInUser = (state) => {
	state.isAuth = true;
	console.log('LOGGED IN!!!');
};
const logOut = (state) => {
	state.isAuth = false;
};

export default { logInUser, logOut };

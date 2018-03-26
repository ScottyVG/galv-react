const user = {
	id: 1,
	username: 'eliza',
	admin: true,
}

// Now say you want to update the user name, you could:
// user.username = 'Peggy'

/* Object Assign */
// const newUser = Object.assign(
// 	{},
// 	user,
// 	{ username: 'peggy'}
// )

/* Spread Operator */
// const newUser = {
// 	...user,
// 	username: 'peggy'
// }

/* Remove Properties w/ Destructuring */
// delete user.admin // this will mutate the original user object
// const { admin, ...newUser } = user

/* Combine Destructuring w/ Spread Operator */
// say you want to change a username while also removing the admin property
const { admin, ...newUser } = {
	...user,
	username: 'peggy'
}

console.log('user', user)
console.log('newUser', newUser)

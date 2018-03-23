const user = {
	id: 1,
	username: 'eliza',
	admin: true,
}

// user.username = 'peggy'

// const newUser = Object.assign(
// 	{},
// 	user,
// 	{ username: 'peggy'}
// )

// const newUser = {
// 	...user,
// 	username: 'peggy'
// }

// delete user.admin

const { admin, ...newUser } = user

console.log('user', user)
console.log('newUser', newUser)
/* Computed Property Names */
// Instead of this:
// const id = 34

// const users = {
// }

// users[id] = 'eliza'

// You can use computed properties in Object literals, like so:
const id = 34

const users = {
	34: 'eliza'
}

const newUsers = {
	...users,
	[id]: 'peggy'
}

/* Shorthand Property Names */
// Instead of this:
// const id = 34,
// 			name = 'eliza',
// 			age = 23

// const user = {
// 	id: id,
// 	name: name,
// 	age: age,
// }

// You can use computed properties in Object literals, like so:
// Notice the [id] bracket syntax in the object literal.
const id = 34,
			name = 'eliza',
			age = 23

const user = {
	id,
	name,
	age,
}

console.log(user)
// console.log(newUsers)
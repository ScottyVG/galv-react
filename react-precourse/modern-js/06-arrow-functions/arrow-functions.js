// const getUser = (id, isAdmin) => ({id, isAdmin})
const getUser = (id, isAdmin) => {id, isAdmin}

console.log(getUser(2, false))

const user = {
	id: 1,
	isAdmin: true,
}
/* standard function */
// function canEdit (user) {
// 	return user.isAdmin
// }

/* anonymous arrow aunction */
/* explicit return */

// (user) => {
// 	return user.isAdmin
// }

/* if you need to refer to the function
elsewhere in your code, you need to assign
it to a const */
// const canEdit = (user) => {
// 	return user.isAdmin
// }
/* implicit returns */
const empty = () => {}
const canEdit = (user) => user.isAdmin

/* async functions */
// const getData = async url => {
// 	const response = await fetch(url)
// 	return await response.json()
// }

const people = [
	{id: 1, name: 'eliza'},
	{id: 2, name: 'peggy'},
]
const names = people.map(person => person.name)

console.log(canEdit(user))
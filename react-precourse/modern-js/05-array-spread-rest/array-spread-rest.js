/*
========================================
Array Spread / Rest
========================================
*/

const colors = [
	'red',
	'blue',
	'green',
]
/* Push */
// colors.push('purple')

/* Concat */
// const newColors = colors.concat('purple')
// const newColors = colors.concat(['purple', 'orange'])

// const newColors = [
// 	...colors,
// 	'purple'
// ]
// const newColors = [
// 	'purple',
// 	...colors,
// ]
// const newColors = [
// 	...['purple', 'orange'],
// 	...colors,
// ]

/* Remove Items - mutating the array */
// colors.pop() //remove last element of the array
// colors.shift() //remove the first element of the array
// colors.splice(colors.indexOf('blue'), 1) //remove an item from the middle of an array by finding the index of that item

/* Remove Items - without mutating the array */
// const newColors = colors.slice(0, -1) //tells javascript to go to the end of an array and then back 1
// const newColors = colors.slice(1) //tells javascript to go to the end of an array and then back 1
// const newColors = colors.filter(c => c !== 'blue') //pass it a function that returns true only when the element is NOT equal to the one you are looking for

/* Replacing Items */
const i = colors.indexOf('blue')
const newColors = [
	...colors.slice(0, 1),
	'purple',
	...colors.slice(i + 1),
]


console.log(colors)
console.log(newColors)
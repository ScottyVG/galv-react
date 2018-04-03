// class Clock {

// 	constructor() {
// 		this.minutes = 0
// 		this.hours = 0
// 	}

// 	toString() {
// 		return `${this.hours}:${this.minutes}`
// 	}

// }
 
/* Class Properties */

// class Clock {

// 	minutes = 0
// 	hours = 0

// 	toString() {
// 		return `${this.hours}:${this.minutes}`
// 	}

// }
// console.log(new Clock().toString())

/* Bound Methods */

class Clock {

	seconds = 0

	tick() {
		this.seconds++
		console.log(`this.seconds = ${this.seconds}`)
	}

}

const clock = new Clock()

setTimeout(clock.tick, 10)

console.log(new Clock().toString())

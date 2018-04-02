const volume = (dimensions) => {
	return dimensions.length *
					dimensions.width *
					dimensions.height
}

console.log(
	volume({
		length: 3,
		width: 4,
		height: 5
	})
)

const address = ({ street, city, state, zip }) => {
  return `${street}, ${city}, ${state} ${zip}`
}
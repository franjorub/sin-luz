const accents = require('remove-accents');

let data = [
	{
		"name": "tachira",
		"value": 0,
	},
	{
		"name": "lara",
		"value": 0,
	},
	{
		"name": "carabobo",
		"value": 0,
	},
	{
		"name": "barinas",
		"value": 0,
	},
	{
		"name": "miranda",
		"value": 0,
	},
	{
		"name": "caracas",
		"value": 0,
	},
	{
		"name": "zulia",
		"value": 0,
	},
	{
		"name": "trujillo",
		"value": 0,
	},
	{
		"name": "merida",
		"value": 0,
	},
	{
		"name": "portuguesa",
		"value": 0
	}
	
]

const updateState = text => {
	const cleanText = accents.remove(text.toLowerCase().replace("#", ""));

	data.forEach((state, index) => {
		if(cleanText.includes(state.name)) state.value = state.value + 1;
		data[index] = state
	})
}

module.exports.data = data;
module.exports.updateState = updateState;
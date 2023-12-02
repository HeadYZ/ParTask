const expenses = {
	'2023-01': {
		'01': {
			food: [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
			fuel: [210.22],
		},
		'09': {
			food: [11.9],
			fuel: [190.22],
		},
	},
	'2023-03': {
		'07': {
			food: [20, 11.9, 30.2, 11.9],
		},
		'04': {
			food: [10.2, 11.5, 2.5],
			fuel: [],
		},
	},
	'2023-04': {},
}

const get_median_of_first_week_expenses = expenses => {
	let expensesOfMonths = []

	for (const [month, days] of Object.entries(expenses)) {
		const actualDay = new Date(month).getDay()
		let firstSunday

		actualDay === 0 ? (firstSunday = 1) : (firstSunday = Math.abs(actualDay - 7) + 1)

		for (const [day, monthExpenses] of Object.entries(days)) {
			if (Number(day) <= firstSunday) {
				monthExpenses.food?.forEach(expense => expensesOfMonths.push(expense))
				monthExpenses.fuel?.forEach(expense => expensesOfMonths.push(expense))
			}
		}
	}

	expensesOfMonths.sort((a, b) => a - b)

	const middleIndex = Math.floor(expensesOfMonths.length / 2)

	return expensesOfMonths.length % 2 > 0
		? expensesOfMonths[middleIndex]
		: (expensesOfMonths[middleIndex] + expensesOfMonths[middleIndex - 1]) / 2
}

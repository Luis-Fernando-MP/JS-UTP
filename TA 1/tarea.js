// SWITCH (GRUPO A: DIAS DE SEMANA - GRUPO B: MESES)
const days = (dia) => {
	switch (dia) {
		case 1:
			return 'Lunes'
		case 2:
			return 'Martes'
		case 3:
			return 'Miércoles'
		case 4:
			return 'Jueves'
		case 5:
			return 'Viernes'
		case 6:
			return 'Sábado'
		case 7:
			return 'Domingo'
		default:
			return 'Número no válido'
	}
}
// console.log(days(1))  --> Lunes

const months = (month) => {
	switch (month) {
		case 1:
			return 'Enero'
		case 2:
			return 'Febrero'
		case 3:
			return 'Marzo'
		case 4:
			return 'Abril'
		case 5:
			return 'Mayo'
		case 6:
			return 'Junio'
		case 7:
			return 'Julio'
		case 8:
			return 'Agosto'
		case 9:
			return 'Septiembre'
		case 10:
			return 'Octubre'
		case 11:
			return 'Noviembre'
		case 12:
			return 'Diciembre'
		default:
			return 'Número no válido'
	}
}
// console.log(months(1))  --> Enero

// 2.- DO-WHILE  (GRUPO A: SERIE 1 - GRUPO B: SERIE 2)
const serie1 = ({ loop = true, limit = 10 }) => {
	if (!loop) return 1 / Math.sqrt(2)

	let n = 1
	let result = 0
	do {
		result += (Math.sqrt(2) - 1) ** n
		n++
	} while (n < limit)
	return result
}

// console.log(serie1({loop: true, limit: 10}))   --> 0.7068529740472492
// console.log(serie1({loop: false}))             --> 0.7071067811865475

const serie2 = ({ loop = true, limit = 10 }) => {
	const { PI } = Math
	if (!loop) return (PI + 1) / PI ** 2

	let n = 1
	let result = 0
	do {
		result += n * (1 / (PI + 1)) ** n
		n++
	} while (n < limit)
	return result
}

// console.log(serie2({ loop: true, limit: 10 }))   --> 0.4196219086283417
// console.log(serie2({ loop: false }))             --> 0.41963106982612847

// 3.- Método babilónico para obtener la raíz cuadrada de un número
const sqrt = (num, precision = 0.00001) => {
	if (num < 0) return NaN
	if (num === 0 || num === 1) return num

	let x = num
	let y = (x + num / x) / 2

	while (Math.abs(x - y) > precision) {
		x = y
		y = (x + num / x) / 2
	}
	return y
}

// console.log(sqrt(8)) 2.82842712474619
// console.log(Math.sqrt(8)) 2.8284271247461903

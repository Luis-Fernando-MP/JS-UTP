# Fibonacci

```js
const fibonacci = ({ limit = 10 }) => {
	const serie = [0, 1]
	for (let i = 1; i < limit; i++) {
		const prev = serie[i - 1]
		serie.push(prev + serie[i])
	}
	return serie
}
```

**Salida:**

```js
console.log(fibonacci({ limit: 11 }))
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
```

---

## 6. Serie de Fibonacci

```js
const phi = (1 + Math.sqrt(5)) / 2

function fibonacciIndex(number) {
	return Math.floor(Math.log(number * Math.sqrt(5)) / Math.log(phi))
}

function getCurrentAndPreviousFibonacci(target) {
	const index = fibonacciIndex(target)
	const m = index - 1
	const prev = Math.round(phi ** m / Math.sqrt(5))
	const current = Math.round(phi ** index / Math.sqrt(5))
	return [prev, current]
}

const RecursiveFibonacci = ({ limit = 10, list = [0, 1] }) => {
	if (list.length < 2) {
		const numbers = getCurrentAndPreviousFibonacci(list[0])
		list = numbers
	}
	if (limit <= list.length) return list.slice(0, limit)
	const newNumber = list[list.length - 2] + list[list.length - 1]
	return RecursiveFibonacci({ limit, list: [...list, newNumber] })
}
```

**Salida:**

```js
console.log(RecursiveFibonacci({ limit: 5, list: [5, 8] }))
// [ 5, 8, 13, 21, 34 ]

console.log(RecursiveFibonacci({ list: [10000], limit: 3 }))
// [ 4181, 6765, 10946 ]

console.log(RecursiveFibonacci({ limit: 10 }))
// [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
```

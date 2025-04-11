# TAREA 2

---

## 1. Sumatoria de Coeficientes Binomiales

```js
const binomial = (n) => 2 ** n
```

**Salida generada:**

```js
console.log(binomial(3)) // --> 8
console.log(binomial(4)) // --> 16
console.log(binomial(5)) // --> 32
```

---

## 2. Ecuación de Swamee-Jain

```js
const swameeJain = (k, D, Re) => {
	const { log10 } = Math
	const C = 0.25
	const Qs = log10(k / D / 3.7 + 5.74 / Re ** 0.9) ** 2
	return C / Qs
}
```

**Salida generada:**

```js
console.log(swameeJain(3.7, 1, 1)) // --> 0.36407207231640104
console.log(swameeJain(7.4, 0.5, 2)) // --> 0.34619408054841966
```

---

## 3. Cálculo de VAN (Valor Actual Neto)

```js
const Van = (I, r, ...V) => {
	let VAN = 0
	for (let t = 1; t < V.length + 1; t++) {
		VAN += V[t - 1] / Math.pow(1 + r, t)
	}
	return VAN - I
}
```

**Salida generada:**

```js
console.log(Van(2000, 0.05, 900, 900, 900)) // --> 450.9232264334305
```

---

## 4. Distribución de Poisson

```js
const factorial = (n) => {
	if (n === 0) return 1
	return factorial(n - 1) * n
}

const Poisson = ({ x, limit = 30 }) => {
	let S = 0
	for (let i = 0; i <= limit; i++) {
		S += (i * x ** i) / factorial(i)
	}
	return S
}
```

**Salida generada:**

```js
console.log(Poisson({ x: 1 })) // --> 2.7182818284590455
console.log(Poisson({ x: 2 })) // --> 14.778112197861297
console.log(Poisson({ x: 3 })) // --> 60.25661076956301
```

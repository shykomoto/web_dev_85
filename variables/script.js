// alert("Hello World!")
console.log("Hello World! console")
document.write("Hello World! document")

//var, let, const

// var a = 20
// var b = 40
// a = 90

// 'можно выводить до создания переменной, но будет <undefined>'
// console.log(c)

// var c = a + b

// console.log(c)

// 'нельзя выводить до создания переменной'
let letVar = 20

console.log(letVar)

// 'постоянное значение не меняется'

const maxElem = 200	

console.log(maxElem)


let num1 = 40
let num2 = 60

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)

// Math.pow 'степень' (число, какую степень)
console.log('Pow', Math.pow(5, 2))

// Math.sqrt 'квадратный корень'
console.log('Sqrt', Math.sqrt(81))

// MAth.round 'округление' (1-5 до меньшего, 6-9 до большего)
console.log('Round', Math.round(5.2))

// MAth.ceil 'округление до болшего'
console.log('Ceil', Math.ceil(5.1))

// Math.floor 'округление до меньшего'
console.log('Floor', Math.floor(5.9))

// все они могут использоватся внутри друг-друга, 
// но лучше как указано ниже действие на результат 

let resultSqrt = Math.sqrt(144)
let resultPow = Math.pow(resultSqrt, 3)



let a = 5
let b = 8

// let c = Math.sqrt((a*a) + (b*b))
let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

console.log(c)

let seconds = 60
let minute = 60
let hour = 5

let resultSeconds = seconds * minute * hour

console.log(resultSeconds)























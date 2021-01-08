// IF / ELSE  'если / иначе'
// >, <, >=, <=, ==, ===, !=
// && - and
// || - or


// FALSE

if(10 == 10){
    console.log("IF")
}else if(9 > 7){
    console.log("ELSE IF 1")
}else if(9 > 7){
    console.log("ELSE IF 2")
}else if(9 > 7){
    console.log("ELSE IF 3")
}else if(9 > 7){
    console.log("ELSE IF 4")
}else{
    console.log("ELSE")
}

let num1 = 20
let num2 = 90
let num3 = 30

// if(num1 > num2 && num1 > num3){
//     console.log('MAX', num1)
// }else if(num2 > num1 && num2 > num3){
//     console.log('MAX', num2)
// }else if(num3 > num1 && num3 > num2){
//     console.log('MAX', num3)
// }else{
//     console.log('EQUAL')
// }

let max = 0

if(num1 > max){
    max = num1
}else if(num2 > max){
    max = num2
}else if(num3 > max){
    max = num3
}

// let name = prompt('Enter your name')

// if(name == 'admin'){
//     console.log("Welcome", name)
// }else{
//     console.log("Error name")
// }

if(10 < 11 && 20 > 15){
    console.log("IF AND")
}

if(10 < 6 || 20 > 15){
    console.log("IF OR")
}


// if(10 == 10){
//     status = true
// }else{
//     status = false
// }

let status = 10 == 10 ? true : false
console.log(status)

let n = 11
let result = n % 2 == 0 ? 'EVEN' : 'ODD'

console.log(result)

if(10 % 2 == 0){
    console.log('EVEN')
}else{
    console.log('ODD')
}
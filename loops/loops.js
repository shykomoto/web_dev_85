// WWHILE, FOR, DO WHILE

//while(condition) {
//    body
// }

// if(condition) {
//    body
// }

let i = 0
let sum = 0

while (i <= 10) {
    if (i % 2 == 0) {
        // sum = sum + 1
        sum += i
    }


    // i = i + 1
    i += 1
}

console.log(sum)


let username = prompt('Enter username')

while (username != 'admin') {
    username = prompt('Enter Valid Username')
}

console.log('Welcome Admin!!!')
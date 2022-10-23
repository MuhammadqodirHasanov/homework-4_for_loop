// ---------------------------------------------------------------------
// task 1
// function da arifmetik amallar
// ---------------------------------------------------------------------

// let br = Number(prompt('1-son'))
// let ik = Number(prompt('2-son'))

// function plus() {
//     return br + ik
// }
// function minus() {
//     return br - ik
// }
// function boluv() {
//     return br / ik
// }
// function kopaytruv() {
//     return br * ik
// }

// console.log(plus());


// ---------------------------------------------------------------------
// task 2
// k(5) sonini n(10) martda chiqarish
// ---------------------------------------------------------------------

// for(let i = 0; i < 10; i++){
//     console.log(5);
// }


// ---------------------------------------------------------------------
// task 3
// string ichidagi raqamni sonini chiqarish va ularning yig'indisi
// ---------------------------------------------------------------------

// soni
// let val = '5473748374837'
// console.log(val.length);

// yig'indisi
// let sum = 0
// for(let i = 0; i < val.length; i++) {
//     let num = Number(val[i])
//     sum += num
// }
// console.log(sum);


// ---------------------------------------------------------------------
// task 4
// probelni yoqotish
// ---------------------------------------------------------------------

// function declaration

// function FDprob(txt) {
//     let res = ''
//     for(let i = 0; i < txt.length; i++) {
//         if(txt[i] !== ' ') {
//             res += txt[i]
//         }
//     }
//     console.log(res)
// }

// FDprob(' Hasanov Muhammad Qodir G`ayrat O`g`li ')

// function expression
// let FEprob = function(text) {
//     for(let i = 0; i < text.length; i++) {
//         if(text[i] != ' ') {
//             console.log(text[i])
//         }
//     }
// }

// FEprob(' Hasanov Muhammad Qodir G`ayrat O`g`li ')


// ---------------------------------------------------------------------
// task 5
// Calculator in switch 
// ---------------------------------------------------------------------

// alert('Kalkulatorga Xush kelibsiz!')
// let buyruq = prompt('Arifmetikasini kiriting(+, -, *, /)')
// let a = Number(prompt('1-sonni kiriting:'))
// let b = Number(prompt('2-sonni kiriting:'))
// let qiymat = 0

// switch(buyruq) {
//     case '+':
//         qiymat = a + b
//     break
//     case '-':
//         qiymat = a - b
//     break
//     case '*':
//         qiymat = a * b
//     break
//     case '/':
//         qiymat = a / b
//     break
//     default:
//         qiymat = 'Bunday Arifmetik amal yoq'
// }

// alert(qiymat)


// ---------------------------------------------------------------------
// task 6
// k(5) dan n(15) gacha bolgan sonlarni chiqarish
// ---------------------------------------------------------------------

// let val = 0

// for(let i = 5; i <= 15; i++) {
//     val =+ i
//     console.log(val);
// }


// ---------------------------------------------------------------------
// task 7
// 1 kilogram konfetdan 15 kilogram gacha narxini chiqarish
// ---------------------------------------------------------------------

// function sweat() {

//     return 
// }

// sweat()


// ---------------------------------------------------------------------
// task 8
// 2 xil function da juft va toq son aniqlash
// ---------------------------------------------------------------------

// Function declaration
// let num = 1

// function FDfunc() {
//     if(num % 2 == 0) {
//         return 'Bu juft son'
//     } else {
//         return 'Bu toq son'
//     }
// }

// console.log(FDfunc())

// Function expression
// const nums = 15

// function FEfunc() {
//     if(nums % 2 > 0) {
//         return 'Toq son'
//     } else {
//         return 'Juft son'
//     }
// }

// console.log(FEfunc());


// ---------------------------------------------------------------------
// task 9
// 1 kg dan 15 kg gacha konfet kilosini narxini chiqazish (1 kg = 15$)
// ---------------------------------------------------------------------

// function konfet(kg) {
//     alert('Konfetlar olamiga hush kelibsiz!')

//     let narx = 0

//     for(let i = 1; i <= kg; i++) {
//         narx = i * kg

//         console.log( `${i} kg: ${narx} $`);
//     }
// }

// konfet(15)


// ---------------------------------------------------------------------
// task 10
// Tub sonni aniqlash
// ---------------------------------------------------------------------

// let num = prompt('son kiriting:')

// if (num % 2 > 0) {
//     console.log('tub son');
// } else {
//     console.log('tub son emas');
// }


// ---------------------------------------------------------------------
// task 11
// harflar va sozlarni ajratib olish
// ---------------------------------------------------------------------

// let val = '2k4bhc8hkx9v53vz9xg3b5v8'
// let letters = ''
// let numbers = 0

// for(let i = 0; i < val.length; i++) {
//     if(!(Number(val[i]))) {
//         letters += val[i]
//     }
//     if((Number(val[i]))) {
//         numbers += val[i]
//     }
// }
// console.log(numbers, letters);
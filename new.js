// 1-msiol

// function one (bir,ikki) {
//     let a = 1;
//     let b = 1;
//     console.log("Birinchi sonlar")
//     while (a <= bir) {
//         console.log(a)
//         a += 1
//     }
//     console.log("Ikkinchi sonlar")
//     while (b <= ikki) {
//         console.log(b)
//         b += 1
//     }
// }
// one(prompt("1-sonni kiriting"), prompt("2-sonni kiriting"))


// 2-misol

// function two (sum , cycle) {
//     let a = sum
//     let b = 1
//     while (b <= cycle) {
//         console.log(b + " kg = " + sum * b)
//         b += 1
//     }
// }
// two (500,10)

// 3-misol

// function three (sum) {
//     let a = 1
//     let b = sum
//     while (a <= 10){
//         console.log((a/10).toFixed(1),(sum * (a/10)).toFixed(0))
//         a++
//     }
// }
// three(1000)

// 4-misol

// function four () {
//     let a = parseInt(prompt("1-chi son"))
//     let b = parseInt(prompt("2-chi son"))
//     while (a <= b) {
//         console.log(a)
//         a += 1
//     }
// }
// four()

// 5-misol chalaaaaaaaaa

// function five (one, two, three) {
//     let a = one
//     let b = two
//     let c = three
//     while (i <= c) {
//         i += 1
//         console.log(i*c)
//
//     }
// }
// five(2,4,7)

// 6-misol

// function solve() {
//     let i = 1
//     while (i <= 100) {
//         switch (true) {
//             case (i % 3 === 0 && i % 5 === 0 ):
//                 console.log(i + " FizzBuzz")
//                 break
//             case (i % 3 ===0 ):
//                 console.log(i + " Fizz")
//                 break
//             case (i % 5 === 0 ):
//                 console.log(i + " Buzz")
//                 break
//             default:
//                 console.log(i)
//         }
//         i++
//     }
// }
// solve();


// SHART OPIRATORLARI

// // 1-misol
// let a = parseInt(prompt("What is your age?"))
// function one (i) {
//     switch (true) {
//         case a >= i:
//             alert("Siz voyaga yetgansiz")
//             break
//         default:
//             alert("Siz voyaga yetganmasiz")
//     }
// }
// one(18)

// 2-misol
// let a = parseInt(prompt("Hohlagan soniggizni kiriting"))
// function two () {
//     switch (true) {
//         case a == 0 :
//             alert("Bu nool")
//             break;
//         case a >= 0 :
//             alert("Bu musbat oka 😎")
//             break
//         case a < 0 :
//             alert("Bu manfiy brat 😎")
//             break;
//
//     }
// }
// two()

// 3-misol
// let i = prompt("parolni kiriting")
// let a = "manfaat123"
// function three () {
//     switch (true) {
//         case i === a :
//             console.log("parol tug'ri")
//             break
//         default:
//             console.log("parol notug'ri")
//             break
//
//     }
// }
// three()

// 4-misol
// let a = parseInt(prompt("bahonghgzini kiriting"))
// function four () {
//     switch (true) {
//         case a >= 90:
//             alert("alo")
//             break
//         case a >= 70 && a <= 89:
//             alert("Yaxshi")
//             break
//         case a >= 50 && a <= 69:
//             alert("Qoniqarli")
//             break
//         default:
//             alert("Yomon")
//             break
//     }
// }
// four()

// 5-misol
// let a = prompt("hafta kuni")
//
// function five() {
//     switch (true) {
//         case a === "dushanba":
//         case a === "seshanba":
//         case a === "chorshanba":
//         case a === "payshanba":
//         case a === "juma":
//             alert("ish kuni")
//             break
//         default:
//             alert("dam olish kuni")
//
//     }
// }
//
// five()

// 6-msiol
// let a = parseInt(prompt("haroratgizni kiriting"))
// function six () {
//     switch (true) {
//         case a >= 30 :
//             alert("uta issiq")
//             break
//         case a >= 15 && a <= 30:
//             alert("Ob-havo yaxshi")
//             break
//         case a >= 0 && a <= 15:
//             alert("salqin uka shamollatib quyasan qalinro kiyin")
//             break
//         default:
//             alert("agar qalin kiyinmasang aniq shomollatasan ")
//     }
// }
// six ()

// 7-misol

// let a = parseInt(prompt("1-chi son"))
// let b = parseInt(prompt("2-chi son"))
// let c = parseInt(prompt("3-chi son"))
// function seven () {
//     switch (true) {
//         case a >= b && a >= c:
//             alert("Eng katta son " + a)
//             break
//         case b >= a && b >= c:
//             alert("Eng katta son " + b)
//             break
//         case c >= a && c >= b:
//             alert("Eng katta son " + c)
//             break
//     }
// }
// seven()

// 8-misol

// let a = prompt("Birinchi tomonni kiriting")
// let b = prompt("Ikkinchi tomonni kiriting")
// let c = prompt("Uchunchi tomonni kiriting")
// function eight () {
//     switch (true) {
//         case a === b && b === c:
//             alert("Teng tomonli uchburchak")
//             break
//         case a === b || a === c || b === c:
//             alert("Teng yonli uchburchak")
//             break
//         default:
//             alert("Turli tomonli")
//     }
// }
// eight()

// 9-misol

// let a = prompt("Raqaminggizni kiriting")
// let b = "+998"
// function nine () {
//     switch (true) {
//         case a === b:
//             alert("true")
//             break
//         default:
//             alert("false")
//     }
// }
// nine()
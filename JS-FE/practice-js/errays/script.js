// const friends = ['Jack', 'John', 'Rick', 'Peter', 'Mark'];
// const friend = friends[0]
// console.log(friend)
// console.log(friends[2])

// const products = ['apple', 'banana', 'potato', 'carrot', 'strawberry'];
// products.push('tomato')
// console.log(products)

// const lastIndexElement = products.length - 1;
// const lastElement = products(lastIndexElement);
// console.log(lastElement)

// const animals = ['dog', 'cat', 'lion'];
// const newAnimals = [];
// for (let i = 0; i < animals.length; i++){
//     const text = `${animals[i]} is my friend`;
//     newAnimals.push(text)
// }

// console.log(newAnimals)

// const numbers = [3, 6, 9];
// let number = 0;
// for (let i = 0; i < numbers.length; i++){
//     number += numbers[i]
// }

// console.log(number)

// Напиши скрипт який рахує суму елементів двух масивів. Без методу concat()
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let sum = 0;

// // for (let i = 0; i < array1.length; i++){
// //     sum += array1[i]
// //     console.log(sum)
// //     for (let y = 0; y < array2.length; y++){
// //         sum += array2[y]
// //         console.log(sum)
// //     }
// // }

// for (let i = 0; i < array1.length; i++){
//     sum += array1[i]
// }

// for (let y = 0; y < array2.length; y++){
//     sum += array2[y]
// }

// console.log(sum)

// Напиши скрипт пошуку самого маленького числа в масиві,  
// при умові, що числа унікальні (не повторюються).
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber ;

// const numbers = [51, 18, 4, 1, 3, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (let i = 0; i < numbers.length; i++){
//     if (smallestNumber > numbers[i]){
//         smallestNumber = numbers[i];
//     }
// }

// console.log(smallestNumber)

// Напиши скрипт пошуку логіна. 
// Якщо логіна немає, вивести повідомлення
// 'Користувач [логін] не знайдено.' 
// Якщо знайшли логін, вивести повідомлення 
// 'Користувач [логін] знайдено.' 
//   - Спочатку через for
//   - Потім через for...of
//   - Логіка break
//   - Метод includes() з тернарним оператором

const login = ['a', 'b', 'c'];
const youLogin = prompt('Enter login');
for (let i = 0; i<login.length;i++){
    if (youLogin === login[i]){
        console.log(`You are ${youLogin}`)
    } else {
        console.log('Your login is not found')
    }
}
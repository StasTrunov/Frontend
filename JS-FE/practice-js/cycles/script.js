// Цикл з лічильником

// for (let e = 0; e < 5; e+=1){
//     console.log(e)
// }

// 1) Запускаємо цикл та ініціальзуємо лічильник let e = 0
// 2) Далі спрацює перевірка умови e < 5, буде true
// 3) Оскілки в умові true то виконаєтся код у фігурних дужках(тіло циклу), тобто console.log(e)
// 4) Спрацьовує е+=1, тобто е = 0 + 1
// 5) Тепер в і лежить 1, переходимо до наступного кроку
// 6) Спрацбовує перевірка е < 5, тобто 1 < 5, в результаті буде true та переходимо до 3 умови

// Виведіть в консоль всі непарні числа за допомогою циклу for

// for (let i = 1; i < 10; i+=2){
//     console.log(i)
// }

// Оператор break потрібен для того щоб перервати цикл

// for (let i = 5; i <= 75; i+=1){
//     console.log(i)
//     if (i === 25){
//         break;
//     }
// }

// Опертор continue пропускає ітерацію

// for (let i = 5; i <= 75; i+=1){
//     if (i % 2 === 0){
//         continue;
//     }
//     console.log(i)
// }

// while (умова){тіло з інструкцією}

// const age = Number(prompt('Скількі вам років'));
// while (age < 18){
// Тут буде зациклиння оскількі умова завжди буде true
//     alert('Ви малий')
// }

// let age = Number(prompt('Скількі вам років'));
// while (age < 18){
//     alert(`Ви малий, вам ${age} років`)
//     age += 1;
// }

// Цикл do {} while ()

// let password;
// const savedPassword = '31415926535';
// do {
//     password = prompt('Enter your password');
// } while (savedPassword !== password)

// Вивести в консоль числа від 1 до 5 всіма циклами

// for (let i = 1; i <= 5; i+=1){
//     console.log(i)
// }

// let f = 1;
// while (f <= 5){
//     console.log(f)
//     f += 1;
// }

// let c = 1
// do {
//     console.log(c)
//     c += 1;
// } while (c <= 5)

// Переписати на while

// for (let number = 0; number < 5;) {
//     console.log(`Число ${number}`);
// }

// let number = 0;
// while (number < 5){
//     console.log(`Число ${number}`)
//     number += 1;
// }

// Написати скрипт який буде перевіряти середній бал успішності учня.
// Прервати роботу циклу, коли середній бал буде меньше 7.

// for (let grade = 12; grade > 0; grade -= 1){
//     console.log(grade)
//     if (grade === 7){
//         break;
//     }
// }

// Цикл повинен питати число поки відвідувач не введе число,
// більше 100, або не натисне кнопку Відміна (ESC).

// let number;
// do {
//     number = Number(prompt('Введіть число'));
//     console.log(number)
// } while (number < 100)

// Напиши скрипт який підраховує загальну суму зп працівників.
// Кількість робітників зберігається в змінній employees.
// ЗП кожного працівника це випадкове число від 500 до 5000. 
// Записати суму в змінну totalSalary і вивести в на сторінку.

// const employes = Number(prompt('Напиши кількість працівників'));
// let totalSalary = 0;
// for (let i = 1; i <= employes; i+=1){
//     const randNum = Math.random() * (5000 - 500) + 500;
//     totalSalary += randNum;
//     if (i === employes){
//         alert(totalSalary)
//     }
// }

// Користувач може оформити доставку товару до себе в країну,
// вказавши її при відвідуванні сторінки в input. Врахуй, користувач може
// ввести ім'я країни не тільки буквами нижнього регістра, а наприклад 'кИтАЙ'.
// Напиши скрипт який виводить повідомлення про вартість доставки в зазначену країну.
// Обов'язково використовуй switch. Формат повідомлення: 
// 'Доставка в [країна] буде коштувати [ціна] кредитів'.
// Але доставка є не скрізь, якщо зазначеної країни немає в списку, то виводь в alert повідомлення
// 'У вашій країні доставка недоступна'.
// Нижче наведено список країн і вартість доставки.
// Китай - 100 кредитів
// Чилі - 250 кредитів
// Австралія - 170 кредитів
// Індія - 80 кредитів
// Ямайка - 120 кредитів

// let input = prompt('Введіть країну');
// switch (input.toLowerCase()){
//     case 'китай':
//         alert(`Доставка в ${input.toLowerCase()} буде коштувати 100 кредитів`)
//         break;
//     case 'чилі':
//         alert(`Доставка в ${input.toLowerCase()} буде коштувати 250 кредитів`)
//         break;
//     case 'австралія':
//         alert(`Доставка в ${input.toLowerCase()} буде коштувати 170 кредитів`)
//         break;
//     case 'індія':
//         alert(`Доставка в ${input.toLowerCase()} буде коштувати 80 кредитів`)
//         break;
//     case 'ямайка':
//         alert(`Доставка в ${input.toLowerCase()} буде коштувати 120 кредитів`)
//         break;
//     default:
//         alert('У вашій країні доставка недоступна')
// }

// Напиши скрипт який просить відвідувача ввести число в prompt до тих пір, 
// поки відвідувач не натисне Cancel і кожен раз додає введене значення до загальної суми.
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. 
// Введення додається до значення змінної total.
// Операція введення числа триває до тих пір, поки користувач не натисне кнопку Cancel в prompt.
// Після того як користувач припинив введення натиснувши кнопку Cancel, показати alert з рядком 
// 'Загальна сума чисел дорівнює [сума]'.
// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не потрібно.
// Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було написано не число, спробуйте ще раз',
// при цьому результат prompt плюсувати до загальної суми не потрібно, 
// після чого знову користувачеві пропонується ввести число в prompt.

// let total = 0;
// while (true) {
//     const input = prompt('Введіть число:');
//     if (input === null) {
//         break;
//     }
//     const number = Number(input);
//     if (!isNaN(number)) {
//         total += number;
//     } else {
//         alert('Було написано не число, спробуйте ще раз');
//     }
// }

// alert(`Загальна сума чисел дорівнює ${total}`);

// Цикл повинен питати число поки відвідувач не введе число,
//  більше 100, або не натисне кнопку Відміна (ESC).

let input;
while (true){
    input = prompt('Enter number');
    if (input === null){
        break;
    }
    let number = Number(input);
    if (number > 100){
        alert('Well done')
        break;
    } 
}
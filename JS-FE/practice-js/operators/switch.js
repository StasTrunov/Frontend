// let input = prompt('Який у вас тип підписка: free, pro, vip?');
// let answer = input.toLowerCase();
// if (answer === 'pro'){
//     alert('Інформація')
// } else if (answer === 'vip'){
//     alert('Інформація')
// } else if (answer === 'free'){
//     alert('Потрібен інший тип підписки')
// } else {
//     alert('У доступі відмовлено')
// }

// switch(answer){
//     case 'pro':
//         alert('Інформація')
//         break;
//     case 'vip':
//         alert('Інформація')
//         break;
//     case 'free':
//         alert('Потрібен інший тип підписки')
//         break;
//     default:
//     alert('У доступі відмовлено')
// }

// Скоротимо приклад

// if (answer === 'pro' || answer === 'vip'){
//     alert('Інформація')
// } else if (answer === 'free'){
//     alert('Потрібен інший тип підписки')
// } else {
//     alert('У доступі відмовлено')
// }

// switch(answer){
//     case 'pro':
//     case 'vip':
//         alert('Інформація')
//         break;
//     case 'free':
//         alert('Потрібен інший тип підписки')
//         break;
//     default:
//     alert('У доступі відмовлено')
// }

// Змінна lang може приймати 4 значення:
// 'ua', 'en', 'ru', 'fr'.
// За допомогою конструкції switch виведи на екран 
// назву місяця в залежності від обраної мови.
// Наприклад, якщо lang = 'fr', то в консоль виводимо "Janvier".

// let input2 = prompt('Введіть мову: ua, en, ru, fr');
// let lang = input2.toLowerCase();

// if (lang === 'ua'){
//     alert('Привіт')
// } else if (lang === 'ru'){
//     alert('Привeт')
// } else if (lang === 'en'){
//     alert('Hello')
// } else if (lang === 'fr'){
//     alert('Janvier')
// } else {
//     alert('Це не мова')
// }

// switch(lang){
//     case 'ua':
//         alert('Місяць')
//         break;
//     case 'ru':
//         alert('Месяц')
//         break;
//     case 'en':
//         alert('Month')
//         break;
//     case 'fr':
//         alert('Janvier')
//         break;
//     default:
//     alert('Це не мова')
// }

// Напиши скрипт вибору опції доставки товару. Опція зберігається в змінній option: 1 - самовивіз, 2 - кур"єр, 3 - пошта.
// В змінну message записати повідомлення в залежності від опції.
//  - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
//  - 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
//  - 'Посилка буде відправлена сьогодні'
//  - 'Вам передзвонить менеджер'.

// let option = Number(prompt('Введи опцію: 1 - самовивіз, 2 - кур"єр, 3 - пошта.'));
// switch (option){
//     case 1:
//         alert('Ви зможете забрати товар завтра з 12:00 в нашому офісі')
//         break;
//     case 2:
//         alert('Кур"єр доставить замовлення завтра з 9:00 до 18:00')
//         break;
//     case 3:
//         alert('Посилка буде відправлена сьогодні')
//         break;
//     default:
//         alert('Вам передзвонить менеджер')
// }

// Напиши скрипт вибору готеля по кількості зірок.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
// Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
// 'Такої кількості зірок немає'

// const stars = prompt('Введи кількість зірок ти хочешь в отелі: 1, 2, 3, 4, або 5')
// switch (stars){
//     case '1':
//         alert('20$');
//         break;
//     case '2':
//         alert('30$');
//         break;
//     case '3':
//         alert('50$');
//         break;
//     case '4':
//         alert('70$');
//         break;
//     case '5':
//         alert('120$');
//         break;
//     default:
//         alert('Такої кількості зірок немає')
// }

// Напиши скрипт, який імітує авторизацію адміністратора в панелі управління. 
// Є змінна message в яку буде записано повідомлення про результат.
// При завантаженні сторінки у відвідувача запитується пароль через prompt:
// Якщо натиснули Cancel, записати в message рядок 'Скасовано користувачем!'
// В іншому випадку, якщо введений пароль який збігається зі значенням константи ADMIN_PASSWORD, записати в message рядок 'Ласкаво просимо!'
// В іншому випадку, тобто якщо жодна з попередніх умов не виконалася, записати в message рядок 'Доступ заборонений, невірний пароль!'
// Після всіх перевірок вивести в alert значення змінної message.
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let password = prompt('enter password');
// let message;
// if (password === null) {
//     message = 'Скасовано користувачем!';
// } else if (password === ADMIN_PASSWORD) {
//     message = 'Ласкаво просимо!';
// } else {
//     message = 'Доступ заборонений, невірний пароль!';
// }
// alert(message);

// На рахунку користувача є 23580 кредитів, значення зберігається в змінній credits (створи і привласни). 
// Користувач вирішує купити пазли, які коштують по 3000 кредитів за штуку.
// Ціна одного пазла зберігається в змінній pricePerPazzle (створи і привласни).
// При відвідуванні сторінки, використовуючи prompt, необхідно запитати кількість пазлів, які користувач хоче купити і зберегти в змінну.
// Напиши скрипт який:
// Якщо в prompt була натиснута кнопка Cancel, виводить в консоль повідомлення 'Скасовано користувачем!'.
// В іншому випадку, розраховує загальну ціну замовлення і зберігає в змінній totalPrice.
// Перевіряє чи зможе користувач оплатити замовлення:
// якщо сума до оплати перевищує кількість кредитів на рахунку, виводь в консоль повідомлення 'Недостатньо коштів на рахунку!'.
// в іншому випадку необхідно порахувати залишок кредитів на рахунку і вивести повідомлення 'Ви купили [число] пазлів, на рахунку залишил
// 'Ви купили [число] пазлів, на рахунку залишилося [число] кредитів.'.

const credits = 23580;
const pricePerPuzzle = 3000; 
const userInput = prompt('Скільки пазлів ви хочете купити?');
if (userInput === null) {
    console.log('Скасовано користувачем!');
} else {
    const numberOfPuzzles = Number(userInput); 
    const totalPrice = numberOfPuzzles * pricePerPuzzle;
    if (totalPrice > credits) {
        console.log('Недостатньо коштів на рахунку!');
    } else {
        const remainingCredits = credits - totalPrice; 
        console.log(`Ви купили ${numberOfPuzzles} пазлів, на рахунку залишилося ${remainingCredits} кредитів.`);
    }
}



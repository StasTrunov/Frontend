// Область видимості буває: 
// 1) Глобальна: Глобальна змінна доступна в будьякому місті коду
// 2) Блочна або локальна: Локальна змінна доступна тількі в тій області видимості в який була створена(фігурних дужках)


if (13 < 30){
    // Блочна область видимості
    const x = 12;
    console.log(x)
}
// console.log(x)

// Блочну область видимості створюють фігурні дужки


// for (const product of []){
//     const b = 31;
//     console.log(b)
// }

// console.log(b)

// function test(){
//     const d = 43;
// }

// console.log(d)

// if (12 < 30){
    
//     if (true){
//         const y = 22;
//     }
//     console.log(y)
// }
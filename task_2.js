// товары
const goods = [
    {
        id: 1,
        name: 'Кроссовки мужские Demix Bitcrazy M',
        description: 'Благодаря современному лаконичному дизайну кроссовки Demix BitCrazy эффектно дополнят любой образ.',
        sizes: [39, 40, 41, 42.5, 43, 43.5, 44, 45, 46,],
        price: 200,
        available: true,
    },
    {
        id: 2,
        name: 'Кроссовки мужские Skechers Arch Fit Big Country',
        description: 'Технологичные кроссовки Skechers Arch Fit с усиленной поддержкой стопы — то что нужно для долгих прогулок.',
        sizes: [40, 41, 42, 43, 43.5, 44, 45,],
        price: 300,
        available: false,
    },
    {
        id: 3,
        name: 'Кроссовки мужские Demix Tsunami 4 NY',
        description: 'Универсальная модель Demix Tsunamy 4 NY легко дополнит любой образ в спортивном стиле.',
        sizes: [40, 41, 42, 43, 44, 45, 46, 47],
        price: 400,
        available: true,
    },
    {
        id: 4,
        name: 'Кроссовки мужские FILA Ray Tracer TR 2',
        description: 'Кроссовки в спортивном стиле от FILA — идеальный выбор для поклонников долгих прогулок.',
        sizes: [40, 41, 42, 43, 44, 45, 46, 47],
        price: 500,
        available: true,
    },
    {
        id: 5,
        name: 'Кроссовки мужские GSD Crom',
        description: 'Кроссовки Crom прекрасно подойдут для завершения образа в спортивном стиле.',
        sizes: [40, 41, 42, 43, 44, 45, 46,],
        price: 600,
        available: false,
    },
];


// корзина
const basket = [
    {
        good: 1,
        amount: 2, // 200
    },
    {
        good: 3,
        amount: 2, // 400
    },
    {
        good: 4,
        amount: 2, //500
    },
];


function createRecordBasket(arr, goodId, amount) {
    if (goodId in goods) {
        console.log('Уже существует товар с таким id');
    } else {
        arr.push({
            good: goodId,
            amount: amount,
        });
        return arr;
    }
}


function deleteOneRecordBasket(arr, goodId) {
    for (let i = 0; i < arr.length; i++) {
        if (goodId === arr[i]['good']) {
            arr.splice(i, 1);
            return arr;
        }
      }
}


function deleteAllRecordsBasket(arr) {
    arr.length = 0;
    return arr;
}


function calcSumItemsBasket(arr) {
    let count = 0, sum = 0;
    let info = [];
    for (let i = 0; i < arr.length; i++) {
        sum += goods[arr[i].good - 1].price * arr[i].amount;
        count += arr[i].amount;
    }
    info.push({
        totalAmount: count,
        totalSumm: sum,
    })
    return info;
}


console.log(createRecordBasket(basket, 6, 25));
console.log(deleteOneRecordBasket(basket, 1));
console.log(deleteAllRecordsBasket(basket));
console.log(calcSumItemsBasket(basket));
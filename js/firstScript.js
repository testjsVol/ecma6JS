/* jshint strict: false */

let money;
let time;

console.log(money);
console.log(time);

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD"); 

console.log(money);
console.log(time);

let expenses = {};
expenses.what = prompt("Введите обязательную статью расходов в этом месяце?");
expenses.cost = prompt("Во сколько обойдется");

let appData = {
    buget : money,
    timeData : time,
    expenses: expenses,
    optionalExpenses: '',
    income: false
};

console.log(appData);
alert(appData.buget);


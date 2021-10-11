
const { employees, bonus } = require('./data.js');
const { checkName } = require('./helper');
const payDay = true;


//checks if name is on the list of people at the company and greets them.

const sayHello = (payDay, employees, bonus) => {
    if(payDay) {
        const names = checkName(employees, bonus);
        for(let i = 0; i < names.length; i++) {
            console.log(`${names[i]} has been given a bonus`);
        }
    } else {
        console.log(`It's not payday`);
    }
}
sayHello(payDay, employees, bonus);
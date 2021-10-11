
const checkedEmployees = [];

const checkName = (employees, bonus) => {
    for (let i = 0; i < employees.length; i++) {
        for (let i = 0; i < bonus.length; i++) {
            if(employees[i] === bonus[i]) {
                checkedEmployees.push(bonus[i]);   
            } 
        }
    }
};

module.exports = {
    checkName
};
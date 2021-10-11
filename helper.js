
const checkedEmployees = [];

const checkName = (employees, bonus) => {
    for (let i = 0; i < employees.length; i++) {
        for (let j = 0; j < bonus.length; j++) {
            if(employees[i] === bonus[j]) {
                checkedEmployees.push(bonus[j]);   
            } 
        }
    }
    return checkedEmployees;
};

module.exports = {
    checkName
};
/*
    Create an object literal called personAccount. It has firstName, lastName, 
    incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,
    addIncome, addExpense and accountBalance methods. Incomes is a set of incomes 
    and its description and expenses is a set of incomes and its description.
*/
const personAccount = {
    firstName : "Muhammad",
    lastName : "Uzair",
    incomes : [15, 20, 50],
    expenses : [10, 15, 40],
    totalIncome : function() {
        let total = 0;
        for (income of this.incomes) {
            total += income;
        }
        return total;
    },
    totalExpense : function() {
        let total = 0;
        for (exp of this.expenses) {
            total += exp;
        }
        return total;
    },
    addIncome : function(income){
        this.incomes.push(income);
    },
    addExpense : function(exp) {
        this.expenses.push(exp);
    },
    accountBalance : function() {
        return this.totalIncome() - this.totalExpense();
    },
    accountInfo : function() {
        return `${this.firstName} ${this.lastName} has account balance of ${this.accountBalance()}k.`
    }
}

console.log(personAccount.accountInfo());
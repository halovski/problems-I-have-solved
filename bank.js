class Bank{

constructor(bankName){
    this.bankName = bankName
    this.allCustomers = []
}

newCustomer(customer){
    let currentCustomer = this.allCustomers.find(element => element.firstName == customer.firstName)
    if(currentCustomer){
        throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
    }

    this.allCustomers.push(customer)

    return customer
}

depositMoney(personalId, amount){
    let totalMoney = `totalMoney`
    let transactions = `transactions`
let foundCustomer = this.allCustomers.find(element => element.personalId == personalId)
if(!foundCustomer){

    throw new Error(`We have no customer with this ID!`)
}
if(!foundCustomer.hasOwnProperty(totalMoney)){
    foundCustomer[totalMoney] = 0
}

foundCustomer[totalMoney] += amount
if(!foundCustomer.hasOwnProperty(transactions)){
    foundCustomer[transactions] = []
}

foundCustomer[transactions].push(`${foundCustomer.firstName} ${foundCustomer.lastName} made deposit of ${amount}$!`)

//return foundCustomer[transactions]
    return `${foundCustomer[totalMoney]}$`
}

withdrawMoney(personalId, amount){
    let totalMoney = `totalMoney`// do i need to initialize it here, can i have a withdraw before a deposit? test it
    let transactions = `transactions`
let foundCustomer = this.allCustomers.find(element => element.personalId == personalId)
if(!foundCustomer){

    throw new Error(`We have no customer with this ID!`)
}
if(!foundCustomer.hasOwnProperty(totalMoney)){
    foundCustomer[totalMoney] = 0
}
if(foundCustomer[totalMoney] < amount){
   throw new Error(`${foundCustomer.firstName} ${foundCustomer.lastName} does not have enough money to withdraw that amount!`)
}
foundCustomer[totalMoney] -= amount

if(!foundCustomer.hasOwnProperty(transactions)){
    foundCustomer[transactions] = []
}

foundCustomer[transactions].push(`${foundCustomer.firstName} ${foundCustomer.lastName} withdrew ${amount}$!`)

// console.log(foundCustomer);
//return foundCustomer[transactions]
    return `${foundCustomer[totalMoney]}$`
}

customerInfo (personalId){
    let foundCustomer = this.allCustomers.find(element => element.personalId == personalId)
    let transactions = `transactions`
if(!foundCustomer){
    throw new Error(`We have no customer with this ID!`)
}

let result = ``
result += `Bank name: ${this.bankName}`
result += `\nCustomer name: ${foundCustomer.firstName} ${foundCustomer.lastName}`
result += `\nCustomer ID: ${personalId}`
result += `\nTotal Money: ${foundCustomer.totalMoney}$`
result += `\nTransactions:`

let transactionText = ``

for(let i = foundCustomer[transactions].length-1; i >= 0; i--){
    //console.log(foundCustomer[transactions][i]);
    transactionText += `\n${i+1}. ${foundCustomer[transactions][i]}`
}

result += transactionText
//add transactions in reverse order

//return foundCustomer
// return transactionText
return result
}

}


let bank = new Bank(`SoftUni Bank`);

console.log(bank.newCustomer({firstName: `Svetlin`, lastName: `Nakov`, personalId: 6233267}));
// console.log(bank.newCustomer({firstName: `Svetlin`, lastName: `Nakov`, personalId: 6233267}));
console.log(bank.newCustomer({firstName: `Mihaela`, lastName: `Mileva`, personalId: 4151596}));

console.log(bank.depositMoney(6233267, 250));
console.log(bank.depositMoney(6233267, 251));
console.log(bank.withdrawMoney(6233267, 125));
// bank.depositMoney(4151596,555);



console.log(bank.customerInfo(6233267));


// { firstName: ‘Svetlin’, lastName: ‘Nakov’, personalId: 6233267 } 
// { firstName: ‘Mihaela’, lastName: ‘Mileva’, personalId: 4151596 }
// 500$
// 375$
// Bank name: SoftUni Bank
// Customer name: Svetlin Nakov
// Customer ID: 6233267
// Total Money: 375$
// Transactions:
// 3. Svetlin Nakov withdrew 125$!
// 2. Svetlin Nakov made depostit of 250$!
// 1. Svetlin Nakov made depostit of 250$!


// Unexpected error: Incorrect output: expected 
// 'Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\nTransactions:\n3. Svetlin Nakov withdrew 125$!\n2. Svetlin Nakov made deposit of 250$!\n1. Svetlin Nakov made deposit of 250$!' to equal 
// 'Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\nTransactions:\n2. Svetlin Nakov withdrew 125$!\n1. Svetlin Nakov made deposit of 250$!\n0. Svetlin Nakov made deposit of 250$!'

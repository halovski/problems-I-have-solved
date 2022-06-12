class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = +budgetMoney
        this.menu = {}
        this.stockProducts = {}
        this.history = []
    }

    loadProducts(productsInput) {
        let result = ``
        let newLine = ``
        let i = 0
        while (i < productsInput.length) {
            result += `${newLine}`

            let nextName = productsInput[i].split(` `)[0]
            let nextNum = productsInput[i].split(` `)[1]
            let nextPrice = productsInput[i].split(` `)[2]
            let nextProductObj = {
                nextName,
                nextNum,
                nextPrice
            }

            if (this.budgetMoney > nextPrice) {
                this.budgetMoney -= +nextPrice
                if (!Object.keys(this.stockProducts).includes(`${nextName}`)) {// if the product exists

                    this.stockProducts[nextName] = { amount: +nextNum }
                } else {
                    this.stockProducts[nextName].amount += +nextNum
                }

                this.history.push(`Successfully loaded ${nextNum} ${nextName}`)

            } else {
                this.history.push(`There was not enough money to load ${nextNum} ${nextName}`)
            }
            //this.history.join()
            i++
        }

        return this.history.join(`\n`)  // return history!!!
    }

    addToMenu(mealName, mealRecipe, mealPrice) {
        let mealProducts = []
        for (let i = 0; i < mealRecipe.length; i++) {
            let tokens = mealRecipe[i].split(` `)

            let productName = tokens.splice(0, tokens.length - 1).join(` `)
            let productPrice = +tokens[tokens.length - 1]


            let nextProduct = {
                [productName]: +productPrice
            }
            mealProducts.push(nextProduct)
        }



        //Object.entries(this.menu)[0]
        // console.log(nextMeal);
        if (Object.keys(this.menu).includes(mealName)) {   // the meal is included
            //return Object.keys(this.menu)
            return `The ${mealName} is already in the our menu, try something different.`
        }

        this.menu[mealName] = {
            recipe: mealProducts,
            price: mealPrice
        }
        // return this.menu[mealName]
        if (Object.keys(this.menu).length === 1) {
            return `Great idea! Now with the ${mealName} we have 1 meal in the menu, other ideas?`
        } else {
            return `Great idea! Now with the ${mealName} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        }

    }

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return `Our menu is not ready yet, please come later...`
        }
        let result = ``
        let newLine = ``
        let i = 0
        while (i < Object.keys(this.menu).length) {
            result += newLine

            result += `${Object.entries(this.menu)[i][0]} - ${Object.entries(this.menu)[i][1].price}`
            newLine = `\n`
            i++
        }
        return result
    }

    makeTheOrder(meal) {

        if (!Object.keys(this.menu).includes(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        // console.log(itemStock);
        // console.log(Object.entries(itemRequired)[0][1]);

        // console.log(Object.values(this.menu[meal].recipe[0]));

        for (let i = 0; i < this.menu[meal].recipe.length; i++) {
            let itemStock = Object.entries(this.stockProducts)[i][1].amount
            let itemRequired = Object.entries(this.menu[meal].recipe.find(element => Object.keys(element)[0] == Object.entries(this.stockProducts)[i][0]))[0][1]

            if (itemStock - itemRequired < 0) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        }

        for (let i = 0; i < this.menu[meal].recipe.length; i++) {
            let itemStock = Object.entries(this.stockProducts)[i][1]
            let itemRequired = Object.entries(this.menu[meal].recipe.find(element => Object.keys(element)[0] == Object.entries(this.stockProducts)[i][0]))[0][1]
              itemStock.amount -= +itemRequired
        //console.log(itemRequired);           
        } 

        this.budgetMoney += this.menu[meal].price
       // return this.stockProducts
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`

    }

}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

let kitchen = new Restaurant(1000);

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// console.log(kitchen.showTheMenu());



// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));




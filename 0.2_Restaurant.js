class Restaurant {
    constructor(budget) {
        this.budget = budget
        this.menu = {}
        this.stockProducts = {}
        this.history = []
    }

    loadProducts(productsInput) {
        let productsTotalPrice = 0
        let result = ``

        for (let i = 0; i < productsInput.length; i++) {

            let nextName = productsInput[i].split(` `)[0]
            let nextNum = productsInput[i].split(` `)[1]
            let nextPrice = productsInput[i].split(` `)[2]
            let nextProductObj = {
                nextName,
                nextNum,
                nextPrice
            }
            if (i === (productsInput.length - 1)) {
                if (this.budget > nextPrice) {
                    this.budget -= +nextPrice
                    if(!Object.keys(this.stockProducts).includes(`${nextName}`)){// if the product exists
                   
                        this.stockProducts[nextName] = { amount: +nextNum }
                    }else{
                        this.stockProducts[nextName].amount += +nextNum
                    }
                    
                    result += `Successfully loaded ${nextNum} ${nextName}`

                } else {
                    result += `There was not enough money to load ${nextNum} ${nextName}`
                }
            } else {
                if (this.budget > nextPrice) {
                    this.budget -= +nextPrice
                    if(!Object.keys(this.stockProducts).includes(`${nextName}`)){// if the product exists
                   
                        this.stockProducts[nextName] = { amount: +nextNum }
                    }else{
                        this.stockProducts[nextName].amount += +nextNum
                    }
                    
                   // console.log(`${this.stockProducts}`);
                    result += `Successfully loaded ${nextNum} ${nextName}\n`

                } else {
                    result += `There was not enough money to load ${nextNum} ${nextName}\n`
                }
            }



        }

        return result
    }

    addToMenu(mealName, mealRecipe, mealPrice){
        let mealProducts = []
        for(let i = 0; i < mealRecipe.length; i++){
            let productName = mealRecipe[i].split(` `)[0]
            let productPrice = mealRecipe[i].split(` `)[1]

            let nextProduct = {
                [productName]: productPrice
            }
            mealProducts.push(nextProduct)
        }
        
        let nextMeal = {
            recipe: mealProducts,
            price: mealPrice
        }
    
        this.menu[mealName]={
            nextMeal
        } 
        //Object.entries(this.menu)[0]
       // console.log(nextMeal);
        if(Object.keys(this.menu).includes(mealName)){   // the meal is included
            //return Object.keys(this.menu)
            return `The ${mealName} is already in the our menu, try something different.`
        }
       
       if(Object.keys(this.menu).length === 1){
        return `Great idea! Now with the ${mealName} we have 1 meal in the menu, other ideas?`
       }else{
        return `Great idea! Now with the ${mealName} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
       }
        
    }

}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));


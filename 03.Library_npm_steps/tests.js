// npm init
//npm install mocha
// npm install chai
//npm run test starts tests
// describe(`library`, () => {

//     it(`library`, () => {

//     })

// })
let library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function (booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};
let chai = require(`chai`) // imports chai
//mocha integrated
describe(`library`, () => {

    it(`calcPriceOfBook`, () => {
        // test parameters
        chai.expect(() => library.calcPriceOfBook(5, 4)).to.throw(`Invalid input`)
        // which function it executes ,instead of me executing it
        chai.expect(() => library.calcPriceOfBook(`boook`, `123`)).to.throw(`Invalid input`)    //throw = () =>
        //throw needs () =>, cant have have try catch without function
        chai.expect(library.calcPriceOfBook(`boook`, 1456)).to.equal(`Price of boook is 10.00`) // return = no () =>
        chai.expect(library.calcPriceOfBook(`boook`, 1980)).to.equal(`Price of boook is 10.00`)
        // no arrow, is 12=12
        chai.expect(library.calcPriceOfBook(`boook`, 2000)).to.equal(`Price of boook is 20.00`)
    })

    it(`findBook`, () => {
        chai.expect(() => library.findBook([],`asd`)).to.throw("No books currently available")
        chai.expect(library.findBook([`book1`, `book2`],`book1`)).to.equal("We found the book you want.")
        chai.expect(library.findBook([`book1`, `book2`],`book6`)).to.equal("The book you are looking for is not here!")

    })

    it(`arrangeTheBooks`, () => {
        chai.expect(() => library.arrangeTheBooks(`not a number`)).to.throw("Invalid input")
        chai.expect(() => library.arrangeTheBooks(-7)).to.throw("Invalid input")
        chai.expect(library.arrangeTheBooks(39)).to.equal("Great job, the books are arranged.")
        chai.expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.") // if > || =, so we get 1 more test
        chai.expect(library.arrangeTheBooks(45)).to.equal("Insufficient space, more shelves need to be purchased.")
    })

})
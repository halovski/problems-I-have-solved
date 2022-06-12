const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

let chai = require(`chai`)

describe(`testNumbers`, () => {

    it(`sumNumbers`, () => {
        chai.expect(testNumbers.sumNumbers(`boook`, 1456)).to.equal(undefined)
        chai.expect(testNumbers.sumNumbers(123, `1456`)).to.equal(undefined)
        chai.expect(testNumbers.sumNumbers(3, 4)).to.equal((7).toFixed(2))
    })


    it(`numberChecker`, () => {
        chai.expect(() => testNumbers.numberChecker(`boook`)).to.throw(`The input is not a number!`)
        chai.expect(testNumbers.numberChecker(124)).to.equal(`The number is even!`)
        chai.expect(testNumbers.numberChecker(123)).to.equal(`The number is odd!`)
    })

    it(`averageSumArray`, () => {

        chai.expect(testNumbers.averageSumArray([0, 4, 8])).to.equal(4)
    })

})
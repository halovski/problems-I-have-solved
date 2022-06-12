const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

let chai = require(`chai`)

describe(`numTest`, () => {

    it(`powNumber`, () => {
        chai.expect(numberOperations.powNumber(4)).to.equal(16)
    })

    it(`numberChecker`, () => {
        chai.expect(() => numberOperations.numberChecker(`f`)).to.throw('The input is not a number!')
        chai.expect(numberOperations.numberChecker(3)).to.equal('The number is lower than 100!')
        chai.expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!')
        chai.expect(numberOperations.numberChecker(333)).to.equal('The number is greater or equal to 100!')
    })

    it(`sumArrays`, () => {
   chai.expect(JSON.stringify(numberOperations.sumArrays([1,2,3],[1,1,1,1]))).to.equal("[2,3,4,1]")
        // if (JSON.stringify(numberOperations.sumArrays([1,2,3],[5])) === "[6,2,3]") {
        //         console.error("They are equal!");
        //     }
            
    })

})


let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}

let chai = require(`chai`)

describe(`dealership`, () => {
    it(`newCarCost`, () => {
        chai.expect(dealership.newCarCost(`Audi A4 B8`, 15001)).to.equal(1)
        chai.expect(dealership.newCarCost(`Audi A4 B998`, 15001)).to.equal(15001)
    })

    it(`carEquipment`, () => {
        chai.expect(JSON.stringify(dealership.carEquipment([1,2,3,4,5], [0,2,4]))).to.equal("[1,3,5]")
       // chai.expect(JSON.stringify(numberOperations.sumArrays([1,2,3],[1,1,1,1]))).to.equal("[2,3,4,1]")
    })

    it(`euroCategory`, () => {
        chai.expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!')
        chai.expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)
        chai.expect(dealership.euroCategory(6)).to.equal(`We have added 5% discount to the final price: 14250.`)
    })


})
class Parking {

    constructor(capacity) {
        this.capacity = capacity
        this.vehicles = []
        //can add more
    }

    addCar(carModel, carNumber) {

        let nextCar = {
            carModel,
            carNumber,
            payed: false    // check removeCar() after pay()
        }

        this.capacity -= 1

        if (this.capacity < 0) {
            throw new Error("Not enough parking space.")
        }

        this.vehicles.push(nextCar)
        //return this.vehicles
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber) {
        let currentCar = this.vehicles.find(element => element.carNumber == carNumber)
        // console.log(currentCar);

        if (currentCar == undefined) {
            throw new Error("The car, you're looking for, is not found.")
        }

        if (currentCar.payed == false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }
        let index = this.vehicles.findIndex(element => element.carNumber === currentCar.carNumber);//????????
        //console.log(index);
        this.vehicles.splice(index, 1)//splice doesnt need the 1
        //remove without if

        //  console.log(this.vehicles);
        this.capacity += 1
        return `${carNumber} left the parking lot.`// works if paid=true

    }

    pay(carNumber) {

        let currentCar = this.vehicles.find(element => element.carNumber == carNumber)

        if (currentCar == undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }

        if (currentCar.payed == true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }

        currentCar.payed = true
        return `${carNumber}'s driver successfully payed for his stay.`

    }

    getStatistics(carNumber) {
        if (carNumber == undefined) {
            this.vehicles.sort((a,b) => a.carModel.localeCompare(b.carModel))
            let result = ``

            result += `The Parking Lot has ${this.capacity} empty spots left.` 


            for(let i = 0; i < this.vehicles.length; i++){
                if(this.vehicles[i].payed == true){
                    result += `\n${this.vehicles[i].carModel} == ${this.vehicles[i].carNumber} - Has payed`
                }else{
                    result += `\n${this.vehicles[i].carModel} == ${this.vehicles[i].carNumber} - Not payed`
                }
                    
               
            }
            //result.replace(/\n$/, "")
            //result.replace(/\n+$/, "")
            return result       // remove last \n ???
        }

        let currentCar = this.vehicles.find(element => element.carNumber == carNumber)
        if(currentCar.payed == true){
            return `${currentCar.carModel} == ${currentCar.carNumber} - Has payed`
        }else{
            return `${currentCar.carModel} == ${currentCar.carNumber} - Not payed`
        }
      
    }
}


const parking = new Parking(3);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("BVolvo t6001", "TX3691CA2"));
console.log(parking.addCar("AVolvo t6002", "TX3691CA3"));
console.log(parking.pay("TX3691CA"));
console.log(parking.pay("TX3691CA3"));
// console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
// console.log(parking.removeCar());
console.log(parking.getStatistics("TX3691CA3"));
console.log(parking.getStatistics());





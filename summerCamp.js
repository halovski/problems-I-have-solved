class SummerCamp {
    constructor(organizer, location, participants) {
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 }
        this.listOfParticipants = []
    }
    registerParticipant(name, condition, money) {

        if (condition != `child` && condition != `student` && condition != `collegian`) {

            throw new Error(`Unsuccessful registration at the camp.`)

        }


        if (this.listOfParticipants.find(element => element.name == name)) {
            return `The ${name} is already registered at the camp.`
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`
        }


        let nextParticipant = { name, condition, power: 100, wins: 0 }
        this.listOfParticipants.push(nextParticipant)

        return `The ${name} was successfully registered.`

    }



    unregisterParticipant(name) {

        if (!this.listOfParticipants.find(el => el.name == name)) {   //!!!!
            throw new Error(`The ${name} is not registered in the camp.`)
        } else {
            let index = this.listOfParticipants.findIndex(el => el.name == name)
            // console.log(index);
            this.listOfParticipants.splice(index, 1)
            //console.log(this.listOfParticipants);

            return `The ${name} removed successfully.`
        }



    }
    timeToPlay(typeOfGame, participant1, participant2) {



        if (!this.listOfParticipants.find(el => el.name == participant1)) {
            throw new Error(`Invalid entered name/s.`)
        }

        if (typeOfGame == `WaterBalloonFights`) {

            if (!this.listOfParticipants.find(el => el.name == participant2)) {
                throw new Error(`Invalid entered name/s.`)
            }
            let participant1Obj = this.listOfParticipants.find(el => el.name == participant1)
            let participant2Obj = this.listOfParticipants.find(el => el.name == participant2)

            if (participant1Obj.condition !== participant2Obj.condition) {
                throw new Error(`Choose players with equal condition.`)
            }


            if (participant1Obj.power > participant2Obj.power) {
                participant1Obj.wins += 1
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            }

            if (participant1Obj.power < participant2Obj.power) {
                participant2Obj.wins += 1
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            }
            
            return `There is no winner.`
        }

        if (typeOfGame == `Battleship`) {

            this.listOfParticipants.find(el => el.name == participant1).power += 20

            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }




    }

    toString() {
        let numberOfParticipants = this.listOfParticipants.length

        let sorted = this.listOfParticipants.sort((a,b) => b.wins - a.wins)
        let ranking = ``
        for (const element of sorted) {

            ranking += `\n${element.name} - ${element.condition} - ${element.power} - ${element.wins}`

        }

     return `${this.organizer} will take ${numberOfParticipants} participants on camping to ${this.location}${ranking}`

    }
}

//  'Jane Austen will take 2 participants on camping to $Pancharevo Sofia 1137, Bulgaria\nSara Dickinson - child - 120 - 1\nPetar Petarson - child - 100 - 0' 
//  'Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria\nSara Dickinson - child - 120 - 1\nPetar Petarson - child - 100 - 0'


// const SummerCamp = result;
let camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');

//assert.equal(camp.registerParticipant('Petar Petarson', 'child', 300), "The Petar Petarson was successfully registered.");
console.log(camp.registerParticipant('Petar Petarson', 'child', 300));
//assert.equal(camp.registerParticipant('Sara Dickinson', 'child', 200), "The Sara Dickinson was successfully registered.");
console.log(camp.registerParticipant('Sara Dickinson', 'child', 200));
//assert.equal(camp.timeToPlay('Battleship', 'Sara Dickinson'), "The Sara Dickinson successfully completed the game Battleship.");
console.log(camp.timeToPlay('Battleship', 'Sara Dickinson'));
//assert.equal(camp.timeToPlay('WaterBalloonFights', 'Sara Dickinson','Petar Petarson'), "The Sara Dickinson is winner in the game WaterBalloonFights.");
console.log(camp.timeToPlay('WaterBalloonFights', 'Sara Dickinson','Petar Petarson'));
// assert.equal(camp.toString(),`Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria
// Sara Dickinson - child - 120 - 1
// Petar Petarson - child - 100 - 0`);
console.log(camp.toString());



//const SummerCamp = result;
// let camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');

// // assert.equal(camp.registerParticipant('Petar Petarson', 'student', 300), "The Petar Petarson was successfully registered.");
// console.log(camp.registerParticipant('Petar Petarson', 'student', 300));
// // assert.equal(camp.registerParticipant('Sara Dickinson', 'child', 200), "The Sara Dickinson was successfully registered.");
// console.log(camp.registerParticipant('Sara Dickinson', 'child', 200));
// // assert.equal(camp.timeToPlay('Battleship', 'Sara Dickinson'), "The Sara Dickinson successfully completed the game Battleship.");
// console.log(camp.timeToPlay('Battleship', 'Sara Dickinson'));
// // expect(()=>camp.timeToPlay('WaterBalloonFights', 'Sara Dickinson', 'Petar Petarson')).to.throw(Error,"Choose players with equal condition.");
// console.log(camp.timeToPlay('WaterBalloonFights', 'Sara Dickinson', 'Petar Petarson'));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// // console.log(summerCamp.registerParticipant("Petar Petarson2", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "child", 150));
// console.log(summerCamp.registerParticipant("Petar Petarson3", "student", 300));
// // console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));
// // The money is not enough to pay the stay at the camp.
// // The Petar Petarson was successfully registered.
// // The Petar Petarson is already registered at the camp.
// // Uncaught Error: Unsuccessful registration at the camp.


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));


// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// console.log(summerCamp.toString());
// The Petar Petarson was successfully registered.
// The Petar Petarson successfully completed the game Battleship.
// The Sara Dickinson was successfully registered.
// Uncaught Error: Choose players with equal condition.
// The Dimitur Kostov was successfully registered.
// The Petar Petarson is winner in the game WaterBalloonFights.
// Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria
// Petar Petarson - student - 120 - 1
// Sara Dickinson - child - 100 - 0
// Dimitur Kostov - student - 100 - 0

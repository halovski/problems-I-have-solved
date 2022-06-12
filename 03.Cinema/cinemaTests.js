const cinema = {
    showMovies: function (movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function (projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function (firstPlace, secondPlace) {

        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 || firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};

let chai = require(`chai`)

describe(`cinema`, () => {

    it(`showMovies`, () => {
        chai.expect(cinema.showMovies([])).to.equal('There are currently no movies to show.')
        chai.expect(cinema.showMovies([1, 2, 3])).to.equal('1, 2, 3')
    });
    it(`ticketPrice`, () => {
        chai.expect(cinema.ticketPrice(`Premiere`)).to.equal(12)
        chai.expect(cinema.ticketPrice(`Normal`)).to.equal(7.5)
        chai.expect(cinema.ticketPrice(`Discount`)).to.equal(5.5)
        chai.expect(() => cinema.ticketPrice(`Discount123`)).to.throw('Invalid projection type.')
    });


    it(`swapSeatsInHall`, () => {
        chai.expect(cinema.swapSeatsInHall(`3`, 7)).to.equal('Unsuccessful change of seats in the hall.')
        chai.expect(cinema.swapSeatsInHall(3, `4`)).to.equal('Unsuccessful change of seats in the hall.')
        chai.expect(cinema.swapSeatsInHall(-9, 7)).to.equal('Unsuccessful change of seats in the hall.')
        chai.expect(cinema.swapSeatsInHall(0, 7)).to.equal('Unsuccessful change of seats in the hall.')
        chai.expect(cinema.swapSeatsInHall(9, -7)).to.equal('Unsuccessful change of seats in the hall.')
        chai.expect(cinema.swapSeatsInHall(5, 0)).to.equal('Unsuccessful change of seats in the hall.')
        chai.expect(cinema.swapSeatsInHall(22, 6)).to.equal('Unsuccessful change of seats in the hall.')
        chai.expect(cinema.swapSeatsInHall(5, 34)).to.equal('Unsuccessful change of seats in the hall.')
        chai.expect(cinema.swapSeatsInHall(3, 3)).to.equal('Unsuccessful change of seats in the hall.')

        chai.expect(cinema.swapSeatsInHall(5, 7)).to.equal('Successful change of seats in the hall.')
    });


    // TODO: …
});

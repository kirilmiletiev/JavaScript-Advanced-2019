function ticketing(arr, sortingStrategy) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let arrOfTickets = [];
    for (let i of arr) {
        let tokens = i.split('|');
        let destinationName = tokens[0];
        let price = Number(tokens[1]);
        let status = tokens[2];
        arrOfTickets.push(new Ticket(destinationName, price, status));
    }

    arrOfTickets = arrOfTickets.sort((a, b) => {
        if (a[sortingStrategy] < b[sortingStrategy]) {
            return -1;
        }

        if (a[sortingStrategy] > b[sortingStrategy]) {
            return 1;
        }

        return 0;
    });

    return arrOfTickets;
}

console.log(ticketing(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));
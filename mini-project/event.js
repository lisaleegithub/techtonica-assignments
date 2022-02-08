// create an Event class
class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
    
    // step 3: create addAvailableTickets function
    // use availableTickets property to store ticket types
    this.addAvailableTickets = function(type, price) {
      // create obj for each type & price set
      const ticketObject = {
        type: type,
        price: price
      }
      this.availableTickets.push(ticketObject);
    }
  }

    // step 5: Add a function to Event called allTickets 
    // that returns a string representing all ticket types and prices, 
    // like: All tickets: 1. Orchestra ($300) 2. Mezzanine ($200) 3. Balcony ($100)
    allTickets() {
      let allTicketsSummary = "All tickets: ";
      // for (let i = 0; i < this.availableTickets.length; i++) {
      //   allTicketsSummary += `${i+1}. ${this.availableTickets[i].type} ${this.availableTickets[i].price} `
        // console.log(allTicketsSummary);
        // all tickets: 1. human 299 2. vampire 99
        // }  
        
        // this.availableTickets[i] = ticket
        this.availableTickets.forEach((ticket, i) => { 
          allTicketsSummary += `${i+1}. ${ticket.type} ${ticket.price} `
        })
      return allTicketsSummary;
    }
}

// create objects and assign values
const eventObj1 = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires'
);

const eventObj2 = new Event(
  'Skillet & Sevendust', 
  'Victorious war tour'
);

const eventObj3 = new Event(
  'Jenny Lewis', 
  'On the line tour 2019'
);

// create an empty array
const eventArray = new Array();

// push objs created into an array
eventArray.push(eventObj1, eventObj2, eventObj3);
// console.log(eventArray);

// iterate through array
// Note that all methods in this examples are 
// inside DOMContentLoaded event handler. 
// This is to prevent any javascript code from running before 
// the document is finished loading (is ready).
document.addEventListener('DOMContentLoaded', () => {
  // Handler when the DOM is fully loaded
  let html = '';
  eventArray.forEach((item) => {
    html += `<li>${item.name} - ${item.description}`;
  });
  document.querySelector('#event').innerHTML = html;
});

// step 2: create TicketType class that can store type and price
class TicketType {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
}

// create an instance for TicketType
// let newTicket = new TicketType("zombie", 100);
// console.log(newTicket);

// test cases
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)
eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)

// test cases for availableTickets()
console.log(eventObj1.availableTickets);
console.log(eventObj2.availableTickets);
console.log(eventObj3.availableTickets);

// test cases for allTickets()
console.log(eventObj1.allTickets());
console.log(eventObj2.allTickets());
console.log(eventObj3.allTickets());
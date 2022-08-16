//Comment line


class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
    }
    addAvailableTickets(name, price) {
      const ticType1 = new TicketType(name, price);
      this.availableTickets.push(ticType1);
    }
   
  
    allTickets() {
    
      let output = `${this.name}-${this.description}- All tickets: `;
      for (let i = 0; i < this.availableTickets.length; i++) {
        output += ` ${i + 1}. ${this.availableTickets[i].name}  ($${this.availableTickets[i].price})`;
      } // this prints on the HTML page
      return output;
    }
  
      searchTickets(lowerNum, upperNum) {
        let counter=1;
        let ticketEligibility=`${this.name}-${this.description}-Eligible tickets: `;
        
        for (let j = 0; j < this.availableTickets.length; j++) {
          if (this.availableTickets[j].price >= lowerNum && this.availableTickets[j].price <= upperNum) {
 counter++;
            ticketEligibility += `${counter}. ${this.availableTickets[j].name} ($${this.availableTickets[j].price})`;
          }
          else if (counter===1 && j === (this.availableTickets.length-1)) {
     ticketEligibility="No tickets available";
  
          }
          //return ticketEligibility;
        }
        return ticketEligibility;
     
      }
  
    }
  
  
  class TicketType {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  const eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
  );
  
  const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
  const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');
  
  const eventArray = new Array();
  
  eventArray.push(eventObj1, eventObj2, eventObj3);
  
  console.log(eventArray);
  
  document.addEventListener('DOMContentLoaded', () => {
    let html = '';
    eventArray.forEach((item) => {
      html += `<li>${item.name} - ${item.description}`;
    });
    document.querySelector('#event').innerHTML = html;
  
  
  });
  
  
  
  //setting ticket prices
  eventObj1.addAvailableTickets("human", 299);
  eventObj1.addAvailableTickets("vampire", 99);
  
  eventObj2.addAvailableTickets("General Admission", 25);
  eventObj2.addAvailableTickets("Floor Seating", 80);
  
  eventObj3.addAvailableTickets("Orchestra", 300);
  eventObj3.addAvailableTickets("Mezzanine", 200);
  eventObj3.addAvailableTickets("Balcony", 100);
  
  console.log(eventObj1.availableTickets[0].price);
  console.log(eventObj1.allTickets());
  console.log(eventObj2.allTickets());
  console.log(eventObj3.allTickets());
  console.log(eventObj1.searchTickets(200, 400));
  console.log(eventObj3.searchTickets(0, 250), "Output:Eligible tickets: 1. Balcony ($100) 2. Mezzanine ($200)");
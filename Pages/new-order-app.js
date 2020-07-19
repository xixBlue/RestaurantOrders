
//Declaring all server variables
const serverOne = document.getElementById('server-one');
const serverTwo = document.getElementById('server-two');
const serverThree = document.getElementById('server-three');
const serverFour = document.getElementById('server-four');
const serverFive = document.getElementById('server-five');

//Declaring all table variables
const tableOne = document.getElementById('table-one');
const tableTwo = document.getElementById('table-two');
const tableThree = document.getElementById('table-three');
const tableFour = document.getElementById('table-four');
const tableFive = document.getElementById('table-five');
const tableSix = document.getElementById('table-six');
const tableSeven = document.getElementById('table-seven');
const tableEight = document.getElementById('table-eight');
const tableNine = document.getElementById('table-nine');
const tableTen = document.getElementById('table-ten');
const tableEleven = document.getElementById('table-eleven');
const tableTwelve = document.getElementById('table-twelve');
const tableThirteeen = document.getElementById('table-thirteen');
const tableFourteen = document.getElementById('table-fourteen');
const tableFifteen = document.getElementById('table-fifteen');

//Declaring Order Items
//Appetizers
const appOne = document.getElementById('app-one');
const appTwo = document.getElementById('app-two');
const appThree = document.getElementById('app-three');
const appFour = document.getElementById('app-four');
const appFive = document.getElementById('app-five');
//Entrees
const entreeOne = document.getElementById('entree-one');
const entreeTwo = document.getElementById('entree-two');
const entreeThree = document.getElementById('entree-three');
const entreeFour = document.getElementById('entree-four');
const entreeFive = document.getElementById('entree-five');
const entreeSix = document.getElementById('entree-six');
const entreeSeven = document.getElementById('entree-seven');
const entreeEight = document.getElementById('entree-eight');
const entreeNine = document.getElementById('entree-nine');
const entreeTen = document.getElementById('entree-ten');
//Desserts
const dessertOne = document.getElementById('dessert-one');
const dessertTwo = document.getElementById('dessert-two');
const dessertThree = document.getElementById('dessert-three');
const dessertFour = document.getElementById('dessert-four');
const dessertFive = document.getElementById('dessert-five');
//Drinks
const drinkOne = document.getElementById('drink-one');
const drinkTwo = document.getElementById('drink-two');
const drinkThree = document.getElementById('drink-three');
const drinkFour = document.getElementById('drink-four');
const drinkFive = document.getElementById('drink-five');

//Declaring Submit/Complete Order Buttons
const submit = document.getElementById('submit');
const completeOrder = document.getElementById('complete-order');

/*
    1. Create an order counter
    2. Create an array based on the order counter
    4. Table button creates new array with
        Order Number
        Server
        Table
    4. Submit button would push to Array and populate Order Created
        Name/Order Object [{
            name: name
            appetizers: {      //add properties to this object as they are ordered, or increment quantity
                app1: quantity
            }
            entree:{
                entree: quantity
            }
            dessert:{
                dessert: quantity
            }
            drink: drink
        }, ... other named object
    5. Complete Order button would push finished array to file in html format existing orders to interpret

    [orderNumber, server, table, name/order array]
    {order: orderNumber, server: serverNumber, order: []}
    object.order.push(new table/individ order)
     
*/

const orderCounter = 105; 

const orderObject = {
    orderNumber: orderCounter,
    server: 0,
    table: 0,
    orderItems: []
}





























//Server button styling to keep pressed and display a toggle dynamic
const clearServerToggles = () => {
    serverOne.style.borderStyle = 'none';
    serverTwo.style.borderStyle = 'none';
    serverThree.style.borderStyle = 'none';
    serverFour.style.borderStyle = 'none';
    serverFive.style.borderStyle = 'none';
}
serverOne.onclick = function(e){
    clearServerToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.server = 1;
}
serverTwo.onclick = function(e){
    clearServerToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.server = 2;
}
serverThree.onclick = function(e){
    clearServerToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.server = 3;
}
serverFour.onclick = function(e){
    clearServerToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.server = 4;
}
serverFive.onclick = function(e){
    clearServerToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.server = 5;
}




//Testing Zone
console.log(orderObject);
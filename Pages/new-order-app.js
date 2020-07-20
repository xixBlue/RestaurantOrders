
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
const tableThirteen = document.getElementById('table-thirteen');
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
const customerName = document.getElementById('customer-name');
const submit = document.getElementById('submit');
const completeOrder = document.getElementById('complete-order');
const deleteBtn = document.getElementById('delete');
let deleteEnabled = false;

/*
    1. Create an order counter
    2. Create an array based on the order counter
    4. Table button creates new array with
        Order Number
        Server
        Table
    4. Submit button would push to Array and populate Order Created
        OrderItems = {
            appetizer:{ 
                {app1: amount,
                app2: amount}
            }
        }
        Order items Object [
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

let orderCounter = 105; 

const orderObject = {
    orderNumber: orderCounter,
    server: 0,
    table: 0,
    customerName: '',
    orderItems: {
        appetizers: {},
        entrees: {},
        desserts: {},
        drinks: {}
    }
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
//Table Button Click Handlers Section:
const clearTableToggles = () => {
    tableOne.style.borderStyle = 'none';
    tableTwo.style.borderStyle = 'none';
    tableThree.borderStyle = 'none';
    tableFour.style.borderStyle = 'none';
    tableFive.style.borderStyle = 'none';
    tableSix.style.borderStyle = 'none';
    tableSeven.style.borderStyle = 'none';
    tableEight.style.borderStyle = 'none';
    tableNine.borderStyle = 'none';
    tableTen.style.borderStyle = 'none';
    tableEleven.style.borderStyle = 'none';
    tableTwelve.style.borderStyle = 'none';
    tableThirteen.style.borderStyle = 'none';
    tableFourteen.style.borderStyle = 'none';
    tableFifteen.style.borderStyle = 'none';
}
tableOne.onclick = function(e){
    clearTableToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.table = 1;
} 
tableTwo.onclick = function(e){
    clearTableToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.table = 2;
}  
tableThree.onclick = function(e){
    clearTableToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.table = 3;
} 
tableFour.onclick = function(e){
    clearTableToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.table = 4;
} 
tableFive.onclick = function(e){
    clearTableToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.table = 5;
} 
tableSix.onclick = function(e){
    clearTableToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.table = 6;
} 
tableSeven.onclick = function(e){
    clearTableToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.table = 7;
} 
tableEight.onclick = function(e){
    clearTableToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.table = 8;
} 
tableNine.onclick = function(e){
    clearTableToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.table = 9;
} 
tableTen.onclick = function(e){
    clearTableToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.table = 10;
} 
tableEleven.onclick = function(e){
    clearTableToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.table = 11;
} 
tableTwelve.onclick = function(e){
    clearTableToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.table = 12;
} 
tableThirteen.onclick = function(e){
    clearTableToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.table = 13;
} 
tableFourteen.onclick = function(e){
    clearTableToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.table = 14;
} 
tableFifteen.onclick = function(e){
    clearTableToggles();
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'none');
    orderObject.table = 15;
} 

//Adding name to orderItems array inside 
customerName.onchange = function() {
    orderObject.customerName = customerName.value;
}

//OrderItems EventHandlers
appOne.onclick = function(e) {
    //check if appetizer is already in order
    //if yes, increase amount
    if (!deleteEnabled){
        if (orderObject.orderItems.appetizers.appOne) {
            orderObject.orderItems.appetizers.appOne++;
        } else {
            orderObject.orderItems.appetizers.appOne = 1;
            this.style.borderStyle = 'inset';
        }
    } else {
        if (orderObject.orderItems.appetizers.appOne > 1) {
            orderObject.orderItems.appetizers.appOne--;
        } else {
            delete orderObject.orderItems.appetizers.appOne;
            //orderObject.orderItems.appetizers.appOne = 0;
            this.style.borderStyle = 'none';
        }
    }   
}
appTwo.onclick = function(e) {
    //check if appetizer is already in order
    //if yes, increase amount
    if (orderObject.orderItems.appetizers.appTwo) {
        orderObject.orderItems.appetizers.appTwo++;
    } else {
        orderObject.orderItems.appetizers.appTwo = 1;
        this.style.borderStyle = 'inset';
    }
}
appThree.onclick = function(e) {
    //check if appetizer is already in order
    //if yes, increase amount
    if (orderObject.orderItems.appetizers.appThree) {
        orderObject.orderItems.appetizers.appThree++;
    } else {
        orderObject.orderItems.appetizers.appThree = 1;
        this.style.borderStyle = 'inset';
    }
}
appFour.onclick = function(e) {
    //check if appetizer is already in order
    //if yes, increase amount
    if (orderObject.orderItems.appetizers.appFour) {
        orderObject.orderItems.appetizers.appFour++;
    } else {
        orderObject.orderItems.appetizers.appFour = 1;
        this.style.borderStyle = 'inset';
    }
}
appFive.onclick = function(e) {
    //check if appetizer is already in order
    //if yes, increase amount
    if (orderObject.orderItems.appetizers.appFive) {
        orderObject.orderItems.appetizers.appFive++;
    } else {
        orderObject.orderItems.appetizers.appFive = 1;
        this.style.borderStyle = 'inset';
    }
}
entreeOne.onclick = function(e) {
    //check if Entree is already in order
    //if yes, increase amount
    if (orderObject.orderItems.entrees.entreeOne) {
        orderObject.orderItems.entrees.entreeOne++;
    } else {
        orderObject.orderItems.entrees.entreeOne = 1;
        this.style.borderStyle = 'inset';
    }
}
entreeTwo.onclick = function(e) {
    //check if Entree is already in order
    //if yes, increase amount
    if (orderObject.orderItems.entrees.entreeTwo) {
        orderObject.orderItems.entrees.entreeTwo++;
    } else {
        orderObject.orderItems.entrees.entreeTwo = 1;
        this.style.borderStyle = 'inset';
    }
}
entreeThree.onclick = function(e) {
    //check if Entree is already in order
    //if yes, increase amount
    if (orderObject.orderItems.entrees.entreeThree) {
        orderObject.orderItems.entrees.entreeThree++;
    } else {
        orderObject.orderItems.entrees.entreeThree = 1;
        this.style.borderStyle = 'inset';
    }
}
entreeFour.onclick = function(e) {
    //check if Entree is already in order
    //if yes, increase amount
    if (orderObject.orderItems.entrees.entreeFour) {
        orderObject.orderItems.entrees.entreeFour++;
    } else {
        orderObject.orderItems.entrees.entreeFour = 1;
        this.style.borderStyle = 'inset';
    }
}
entreeFive.onclick = function(e) {
    //check if Entree is already in order
    //if yes, increase amount
    if (orderObject.orderItems.entrees.entreeFive) {
        orderObject.orderItems.entrees.entreeFive++;
    } else {
        orderObject.orderItems.entrees.entreeFive = 1;
        this.style.borderStyle = 'inset';
    }
}
entreeSix.onclick = function(e) {
    //check if Entree is already in order
    //if yes, increase amount
    if (orderObject.orderItems.entrees.entreeSix) {
        orderObject.orderItems.entrees.entreeSix++;
    } else {
        orderObject.orderItems.entrees.entreeSix = 1;
        this.style.borderStyle = 'inset';
    }
}
entreeSeven.onclick = function(e) {
    //check if Entree is already in order
    //if yes, increase amount
    if (orderObject.orderItems.entrees.entreeSeven) {
        orderObject.orderItems.entrees.entreeSeven++;
    } else {
        orderObject.orderItems.entrees.entreeSeven = 1;
        this.style.borderStyle = 'inset';
    }
}
entreeEight.onclick = function(e) {
    //check if Entree is already in order
    //if yes, increase amount
    if (orderObject.orderItems.entrees.entreeEight) {
        orderObject.orderItems.entrees.entreeEight++;
    } else {
        orderObject.orderItems.entrees.entreeEight = 1;
        this.style.borderStyle = 'inset';
    }
}
entreeNine.onclick = function(e) {
    //check if Entree is already in order
    //if yes, increase amount
    if (orderObject.orderItems.entrees.entreeNine) {
        orderObject.orderItems.entrees.entreeNine++;
    } else {
        orderObject.orderItems.entrees.entreeNine = 1;
        this.style.borderStyle = 'inset';
    }
}
entreeTen.onclick = function(e) {
    //check if Entree is already in order
    //if yes, increase amount
    if (orderObject.orderItems.entrees.entreeTen) {
        orderObject.orderItems.entrees.entreeTen++;
    } else {
        orderObject.orderItems.entrees.entreeTen = 1;
        this.style.borderStyle = 'inset';
    }
}
dessertOne.onclick = function(e) {
    //check if Dessert is already in order
    //if yes, increase amount
    if (orderObject.orderItems.desserts.dessertOne) {
        orderObject.orderItems.desserts.dessertOne++;
    } else {
        orderObject.orderItems.desserts.dessertOne = 1;
        this.style.borderStyle = 'inset';
    }
}
dessertTwo.onclick = function(e) {
    //check if Dessert is already in order
    //if yes, increase amount
    if (orderObject.orderItems.desserts.dessertTwo) {
        orderObject.orderItems.desserts.dessertTwo++;
    } else {
        orderObject.orderItems.desserts.dessertTwo = 1;
        this.style.borderStyle = 'inset';
    }
}
dessertThree.onclick = function(e) {
    //check if Dessert is already in order
    //if yes, increase amount
    if (orderObject.orderItems.desserts.dessertThree) {
        orderObject.orderItems.desserts.dessertThree++;
    } else {
        orderObject.orderItems.desserts.dessertThree = 1;
        this.style.borderStyle = 'inset';
    }
}
dessertFour.onclick = function(e) {
    //check if Dessert is already in order
    //if yes, increase amount
    if (orderObject.orderItems.desserts.dessertFour) {
        orderObject.orderItems.desserts.dessertFour++;
    } else {
        orderObject.orderItems.desserts.dessertFour = 1;
        this.style.borderStyle = 'inset';
    }
}
dessertFive.onclick = function(e) {
    //check if Dessert is already in order
    //if yes, increase amount
    if (orderObject.orderItems.desserts.dessertFive) {
        orderObject.orderItems.desserts.dessertFive++;
    } else {
        orderObject.orderItems.desserts.dessertFive = 1;
        this.style.borderStyle = 'inset';
    }
}
drinkOne.onclick = function(e) {
    //check if Drink is already in order
    //if yes, increase amount
    if (orderObject.orderItems.drinks.drinkOne) {
        orderObject.orderItems.drinks.drinkOne++;
    } else {
        orderObject.orderItems.drinks.drinkOne = 1;
        this.style.borderStyle = 'inset';
    }
}
drinkTwo.onclick = function(e) {
    //check if Drink is already in order
    //if yes, increase amount
    if (orderObject.orderItems.drinks.drinkTwo) {
        orderObject.orderItems.drinks.drinkTwo++;
    } else {
        orderObject.orderItems.drinks.drinkTwo = 1;
        this.style.borderStyle = 'inset';
    }
}
drinkThree.onclick = function(e) {
    //check if Drink is already in order
    //if yes, increase amount
    if (orderObject.orderItems.drinks.drinkThree) {
        orderObject.orderItems.drinks.drinkThree++;
    } else {
        orderObject.orderItems.drinks.drinkThree = 1;
        this.style.borderStyle = 'inset';
    }
}
drinkFour.onclick = function(e) {
    //check if Drink is already in order
    //if yes, increase amount
    if (orderObject.orderItems.drinks.drinkFour) {
        orderObject.orderItems.drinks.drinkFour++;
    } else {
        orderObject.orderItems.drinks.drinkFour = 1;
        this.style.borderStyle = 'inset';
    }
}
drinkFive.onclick = function(e) {
    //check if Drink is already in order
    //if yes, increase amount
    if (orderObject.orderItems.drinks.drinkFive) {
        orderObject.orderItems.drinks.drinkFive++;
    } else {
        orderObject.orderItems.drinks.drinkFive = 1;
        this.style.borderStyle = 'inset';
    }
}

























deleteBtn.onclick = function (e) {
    this.style.borderStyle = (this.style.borderStyle !== 'inset' ? 'inset' : 'outset');
    this.style.backgroundColor = (this.style.backgroundColor === 'red' ? 'transparent' : 'red');
    if (deleteEnabled) {
        deleteEnabled = false;
        this.textContent = 'Delete';
    }
    else {
        deleteEnabled = 'true';
        this.textContent = 'Delete Enabled!';
    }
}







//CompleteOrder Button Function
completeOrder.onclick = function(e){
    console.log(orderObject);
    //add new html elements for each objectItem in objectOrder
    // const displayOrderSection = document.getElementById('display-order');
    // for (let prop in orderObject.orderItems) {
    //     for (let innerProp in prop) {
    //         const pElement = document.createElement('p');
    //         pElement.innerText = `${innerProp}: ${innerProp.value}`;
    //         displayOrderSection.appendChild(pElement);
    //     }
    // }

    orderCounter++;
    orderObject.orderNumber = orderCounter;
}




//Testing Zone
console.log(orderObject);
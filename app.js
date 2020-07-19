var orderCounter = 100;

if (document.getElementById('new-order-button') !== null) {
    const newOrder = document.getElementById('new-order-button');
    newOrder.onclick = function (e) {
        ++orderCounter;
    }
}

/*
newOrder.onclick = function (e) {
    ++orderCounter;
}
*/


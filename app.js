for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.getItem(localStorage.key(i)));
}

const deleteButton = document.getElementById('delete-local-storage');
deleteButton.addEventListener('click', function() {
  localStorage.clear();
  console.clear();
});

const newOrder = document.getElementById('new-order');
newOrder.addEventListener('click', function() {
  window.location.href = 'Pages/new-order.html';
});

const existingOrders = document.getElementById('existing-orders');
existingOrders.addEventListener('click', function() {
    window.location.href = 'Pages/existing-orders.html';
})



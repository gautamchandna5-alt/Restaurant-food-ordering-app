import { menuArray } from './data.js';

const menu = document.getElementById('menu');
const order = document.getElementById('order');
const payment = document.getElementById('payment');
const selectedItems = [];

document.addEventListener('click', (e) => {
    if(e.target.dataset.itemId){
        addItemToOrder(e.target.dataset.itemId)
    }
})
function addItemToOrder(itemId){
    const orderedItem = menuArray.filter((foodOption)=> {return foodOption.id === Number(itemId)})[0]
    selectedItems.push(orderedItem);
    renderOrder();
}

function renderOrder(){

    displayOverallOrder();
    displayOrderItems();
    displayTotalPrice();
    
}


const renderMenu = menuArray.map((item) => {
    return `
        <div class="menu-items">
                <div class="menu-item">
                    <div class="item-graphic">
                    ${item.emoji}
                    </div>
                    <div class="item-details">
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item-ingredients">${item.ingredients.join(', ')}</p>
                        <p class="item-price">$${item.price}</p>
                    </div>
                    <button class="add-btn" data-item-id=${item.id}>+</button>
                </div>
        </div>
    `;
})
menu.innerHTML = renderMenu.join('');

function displayOverallOrder(){
    order.innerHTML =`
            <h2>Your order</h2>
            <div id="order-items" class="order-items">
                <div class="order-item" id="order-item">
                    <div class="order-item-name" id="order-item-name">
                        <p>
                            pizza
                        </p>
                        <button class="remove-btn" id="remove-btn">Remove</button>
                    </div>
                    <div id="order-item-price" class="order-item-price">
                        <p>
                            $14
                        </p>
                    </div>
                </div>
            </div>
            <div class="total-price">
                <h3>Total price:</h3>
                <h3 id="total-price-value">$0</h3>
            </div>
            <button id="complete-order-btn" class="btn">Complete order</button >

`
}



const completeOrderBtn = document.getElementById('complete-order-btn');

completeOrderBtn.addEventListener('click', () => {
    payment.classList.toggle('hidden');
})
const payBtn = document.getElementById('pay-btn');
payBtn.addEventListener('click', () => {
    payment.classList.toggle('hidden');
})
payment.innerHTML = `
            <h1>enter card details</h1>
            <form>
            <input type="text" placeholder="Enter your name" id="card-name" class="input-field" required>
            <input type="number" placeholder="Enter card number" id="card-number" class="input-field" required>
            <input type="number" placeholder="Enter CVV" id="card-cvv" class="input-field" required>
            <button id="pay-btn" class="btn">Pay</button>
            </form>
`

import { menuArray } from './data.js';



const menu = document.getElementById('menu');

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


const selectedItems = [];

function addItemToOrder(itemId){
    const orderedItem = menuArray.filter((foodOption)=> {return foodOption.id === Number(itemId)})[0]
    selectedItems.push(orderedItem);
    render()
    renderTotalOrderPrice()

}

const order = document.getElementById('order');


function render() {
    order.innerHTML = ''
    order.innerHTML =`<h2>Your order</h2>
    <div id="order-items" class="order-items">
    
    </div>
    <div class="total-price">
    <h3>Total price:</h3>
    <h3 id="total-price-value">$0</h3>
    </div>
    <button id="complete-order-btn" class="btn">Complete order</button >
    
    `
    
    const orderItems = document.getElementById('order-items')
    
    
    const renderOrderItems = selectedItems.map((item)=>{
        return `<div class="order-item" id="order-item">
        <div class="order-item-name" id="order-item-name">
        <p>
        ${item.name}
        </p>
        <button class="remove-btn" id="remove-btn">Remove</button>
        </div>
        <div id="order-item-price" class="order-item-price">
                        <p>
                            $${item.price}
                        </p>
         </div>
    </div>
        `
    })
    
    orderItems.innerHTML += renderOrderItems.join('')

    
}
function renderTotalOrderPrice (){
    let totalPrice = 0
    selectedItems.forEach((item) => {
        return totalPrice+= item.price
    }
    )
    document.getElementById('total-price-value').innerHTML = '$'+ totalPrice
}

const payment = document.getElementById('payment')
function completePayment  () {
   payment.innerHTML = `
            <h1>enter card details</h1>
            <form>
            <input type="text" placeholder="Enter your name" id="card-name" class="input-field" required>
            <input type="number" placeholder="Enter card number" id="card-number" class="input-field" required>
            <input type="number" placeholder="Enter CVV" id="card-cvv" class="input-field" required>
            <button id="pay-btn" class="btn">Pay</button>
            </form>
`
    
const payBtn = document.getElementById('pay-btn');
payBtn.addEventListener('click', () => {
    payment.classList.toggle('hidden')})


}



document.addEventListener('click', (e) => {
    if(e.target.dataset.itemId){
        addItemToOrder(e.target.dataset.itemId)
    }
    if (e.target.id === 'complete-order-btn'){
        completePayment()
        payment.classList.toggle('hidden')
    }

    if(e.target.id === 'remove-btn'){

    }

})
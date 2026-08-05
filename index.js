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
                    <button class="add-btn" data-item-id="${item.id}">+</button>
                </div>
        </div>
    `;
})
menu.innerHTML = renderMenu.join('');


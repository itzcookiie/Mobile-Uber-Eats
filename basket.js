const basketItemContainer = document.getElementById('basket-item-container');
const basketTotal = document.querySelector('.basket-total');
let sum = 0;

document.addEventListener('DOMContentLoaded', displayBasketItems);

function displayBasketItems() {
    const storedBasket = localStorage.getItem('basket')
    if(storedBasket) {
        const parsedBasket = JSON.parse(storedBasket);
        parsedBasket.forEach(basketItem => {
            sum += +basketItem.price;
            console.log(basketItem.price)
            const basketItemDiv = document.createElement('div');
            basketItemDiv.classList.add('basket-item');
            basketItemDiv.innerHTML = 
            `
            <div class="basket-quantity">
                <div class="ui-select"><div id="select-3-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow"><span>1</span><select>
                    <option value="0">Remove</option>
                    <option selected="" value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select></div></div>
            </div>
            <div class="basket-food">
                <p>${basketItem.food}</p>
            </div>
            <div class="basket-price">
                <p>£${basketItem.price}</p>
            </div>
            `
            basketItemContainer.appendChild(basketItemDiv);
            const hrElement = document.createElement('hr');
            basketItemContainer.appendChild(hrElement);
        })
        basketTotal.innerText = `£${sum}`;
    }
}
const basketItemContainer = document.getElementById('basket-item-container');
const basketTotal = document.querySelector('.basket-total');
const clearBtn = document.querySelector('.clear-button');
let sum = 0;

clearBtn.addEventListener('click', clear);

document.addEventListener('DOMContentLoaded', displayBasketItems);

function displayBasketItems() {
    const storedBasket = localStorage.getItem('basket')
    if(storedBasket) {
        const parsedBasket = JSON.parse(storedBasket);
        parsedBasket.forEach(basketItem => {
            sum += +basketItem.price * +basketItem.quantity;
            console.log(basketItem.price)
            const basketItemDiv = document.createElement('div');
            basketItemDiv.classList.add('basket-item');
            basketItemDiv.innerHTML = 
            `
            <div class="basket-quantity">
            <form>
            <div class="ui-field-contain">
                <label for="select-native-1">Qty: </label>
                <select name="select-native-1" id="select-native-1">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            </form>
            </div>
            <div class="basket-food">
                <p>${basketItem.food}</p>
            </div>
            <div class="basket-price">
                <p>£${basketItem.price * basketItem.quantity}</p>
            </div>
            `
            const quantity = basketItemDiv.querySelector(`option[value="${basketItem.quantity}"]`)
            quantity.setAttribute('selected', '');
            basketItemContainer.appendChild(basketItemDiv);
            const hrElement = document.createElement('hr');
            basketItemContainer.appendChild(hrElement);
        })
        basketTotal.innerText = `£${sum}`;
    }
}

function clear() {
    localStorage.removeItem('basket');
}
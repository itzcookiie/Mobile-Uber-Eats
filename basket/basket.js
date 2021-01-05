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
                <button>
                    <strong>${basketItem.quantity}</strong>
                </button>
            </div>
            <div class="basket-food">
                <p>${basketItem.food}</p>
            </div>
            <div class="basket-price">
                <p>£${basketItem.price * basketItem.quantity}</p>
            </div>
            `
            basketItemContainer.appendChild(basketItemDiv);
            const hrElement = document.createElement('hr');
            basketItemContainer.appendChild(hrElement);
        })
        basketTotal.innerText = `£${sum}`;
    }
}

function clear() {
    localStorage.removeItem('basket');
    window.location.href = '../POI-1.html'
}
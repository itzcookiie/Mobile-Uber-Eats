const orderSummaryList = document.getElementById('order-summary-list');
const checkoutTotal = document.getElementById('checkout-total');
const bill = document.getElementById('total_value');
let sum = 0;

document.addEventListener('DOMContentLoaded', displayBasket);

function displayBasket(event) {
    const getBasket = localStorage.getItem('basket');
    if(getBasket) {
        const parsedBasket = JSON.parse(getBasket);
        parsedBasket.forEach(basketItem => {
            sum += +basketItem.price * +basketItem.quantity;
            const basketItemElement = document.createElement('li');
            let basketDetails = document.createElement('div');
            basketDetails.classList.add('checkout-list-details');
            basketDetails.innerHTML = 
            `
                <p>${basketItem.food}</p>
                <p>£${basketItem.price}  x${basketItem.quantity}  </p>
            `
            basketItemElement.appendChild(basketDetails);
            orderSummaryList.appendChild(basketItemElement);
        })
        checkoutTotal.innerText = `£${sum}`;
        bill.value = sum;
    }
}
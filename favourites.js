const favsContainer = document.getElementById('favourites-container');
const addToBasketBtns = document.querySelector('.add-to-basket');
const clearBtn = document.querySelector('.clear-button');

clearBtn.addEventListener('click', clear);

document.addEventListener('DOMContentLoaded', displayFavourites);

function displayFavourites() {
    
    const storedFavs = localStorage.getItem('favs');
    if(storedFavs) {
        const parsedFavs = JSON.parse(storedFavs);
        parsedFavs.forEach(fav => {
            const favsUI = document.createElement('div');
            favsUI.classList.add('favourites-ui');
            favsUI.innerHTML = 
            `
            <div class="favourites-ui" data-price="${fav.price}">
                <div class="favourites">
                    <div class="food-image">
                        <div class="Images"> 
                            <img src="${fav.image}" width="200" height="200" clas="chef" alt="">
                        </div>
                    </div>
                    <div class="food-details">
                        <p class="food-name">${fav.food}</p>
                        <div class="quantity">
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
                    </div>
                </div>
                <div class="options">
                <button class="ui-btn ui-btn-inline ui-btn-b ui-corner-all ui-shadow add-to-basket">Add</button>
                </div>
            </div>
            `
            const addToBasketBtn = favsUI.querySelector('.add-to-basket');
            addToBasketBtn.addEventListener('click', addToBasket)

            favsContainer.appendChild(favsUI);
        })
    }
}

function addToBasket(event) {
    const storedBasket = localStorage.getItem('basket')
    const parsedBasket = storedBasket ? JSON.parse(storedBasket) : [];
    const parentDiv = event.target.parentNode.parentNode;
    console.log(parentDiv)
    const foodName = parentDiv.querySelector('.food-name').innerText;
    const foodImage = parentDiv.querySelector('img').src;
    const foodPrice = parentDiv.dataset.price;

    const foodData = {
        food: foodName,
        price: foodPrice.slice(1),
        image: foodImage,
        quantity: parentDiv.querySelector('#select-native-1').value
    };
    parsedBasket.push(foodData);
    const JSONBasket = JSON.stringify(parsedBasket);
    localStorage.setItem('basket', JSONBasket);
}

function clear() {
    localStorage.removeItem('favs');
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
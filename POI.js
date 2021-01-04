const addToBasketBtns = document.querySelectorAll('.add-to-basket');
const addToFavsBtns = document.querySelectorAll('.add-to-favourites');

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

[...addToFavsBtns].forEach(addToFavBtn => addToFavBtn.addEventListener('click', favouriteItem));

[...addToBasketBtns].forEach(addToBasketBtn => addToBasketBtn.addEventListener('click', addToBasket));

function favouriteItem(event) {
    const storedFavs = localStorage.getItem('favs')
    const parsedFavs = storedFavs ? JSON.parse(storedFavs) : [];
    const parentDiv = event.target.parentNode;
    const foodName = parentDiv.querySelector('.food-name').innerText;
    const foodImage = parentDiv.querySelector('img').src;
    const foodPrice = parentDiv.querySelector('.price').innerText;
    const foodData = {
        food: foodName,
        price: foodPrice,
        image: foodImage
    };
    parsedFavs.push(foodData);
    const JSONFavourites = JSON.stringify(parsedFavs);
    localStorage.setItem('favs', JSONFavourites);
}

function addToBasket(event) {
    const storedBasket = localStorage.getItem('basket')
    const parsedBasket = storedBasket ? JSON.parse(storedBasket) : [];
    const parentDiv = event.target.parentNode;
    const foodName = parentDiv.querySelector('.food-name').innerText;
    const foodImage = parentDiv.querySelector('img').src;
    const foodPrice = parentDiv.querySelector('.price').innerText;
    const foodData = {
        food: foodName,
        price: foodPrice.slice(1),
        image: foodImage
    };
    parsedBasket.push(foodData);
    console.log(parsedBasket)
    const JSONBasket = JSON.stringify(parsedBasket);
    localStorage.setItem('basket', JSONBasket);
}
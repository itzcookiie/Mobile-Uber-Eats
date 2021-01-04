const favsContainer = document.getElementById('favourites-container');

document.addEventListener('DOMContentLoaded', displayFavourites);

function displayFavourites() {
    const storedFavs = localStorage.getItem('favs');
    if(storedFavs) {
        const parsedFavs = JSON.parse(storedFavs);
        console.log(parsedFavs)
        parsedFavs.forEach(fav => {
            const favsUI = document.createElement('div');
            favsUI.classList.add('favourites-ui');
            favsUI.innerHTML = 
            `
            <div class="favourites-ui">
                <div class="favourites">
                    <div class="food-image">
                        <div class="Images"> 
                            <img src="${fav.image}" width="200" height="200" clas="chef" alt="">
                        </div>
                    </div>
                    <div class="food-details">
                        <p class="food-name">${fav.food}</p>
                        <div class="quantity">
                            <p class="quantity-text">Qty: </p>
                            <div class="ui-select"><div id="select-3-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow"><span>1</span><select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select></div></div>
                        </div>
                    </div>
                </div>
                <div class="options">
                    <button class=" ui-btn ui-shadow ui-corner-all">Add to basket</button>
                    <button class=" ui-btn ui-shadow ui-corner-all">Remove</button>
                    <button class=" ui-btn ui-shadow ui-corner-all">Email</button>
                </div>
            </div>
            `

            
            favsContainer.appendChild(favsUI);
        })
    }
}
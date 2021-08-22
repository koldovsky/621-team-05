(function () {
    const productsJson = `[
        {
            "id": "1",
            "name": "Cabernet",
            "price": "17.00USD",
            "cart": "Add to cart",
            "imgUrl": "image/caberne.jpg"            
        },
        {
            "id": "2",
            "name": "Pinot-grigio",
            "price": "10.00USD",
            "cart": "Add to cart",
            "imgUrl": "image/pinot-grigio.jpg"            
        },
        {
            "id": "3",
            "name": "Pinot Noir",
            "price": "12.00USD",
            "cart": "Add to cart",
            "imgUrl": "image/pinot-noir.jpg"            
        },
        {
            "id": "4",
            "name": "Riesling",
            "price": "16.00USD",
            "cart": "Add to cart",
            "imgUrl": "image/riesling.jpg"            
        },
        {
            "id": "5",
            "name": "Sauvignon",
            "price": "12.00USD",
            "cart": "Add to cart",
            "imgUrl": "image/sauvigmon.jpg"            
        },
        {
            "id": "6",
            "name": "Soave",
            "price": "12.00USD",
            "cart": "Add to cart",
            "imgUrl": "image/soave.jpg"            
        },
        {
            "id": "7",
            "name": "Syrah",
            "price": "13.00USD",
            "cart": "Add to cart",
            "imgUrl": "image/syrah.jpg"            
        },
        {
            "id": "8",
            "name": "Zifandel",
            "price": "14.00USD",
            "cart": "Add to cart",
            "imgUrl": "image/zifandel.jpg"            
        }
    ]`; 

    const products = JSON.parse(productsJson);

    let productsHtml = "";
    for (const product of products) { 
            productsHtml += `
            <div class="picture-our-wine">
                    <img class="picture-our-wine-bootle" src="${product.imgUrl}" alt="${product.name}">
                </div>
                <div class="add-wine-box">
                    <a href="pinot-noir.html" class="buttom">${product.name}</a>
                    <p class="price">${product.price}</p>
                    <a href="#Add-to-cart" class="buttom">${product.cart}</a>
                </div>`;
        }
        document.querySelector('main .our-wine-choice').innerHTML = productsHtml;

})();
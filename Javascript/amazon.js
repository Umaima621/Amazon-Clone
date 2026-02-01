loadProducts(renderProduct);
function renderProduct(){
    let productHTMl='';
    item.forEach((items)=>{
      productHTMl+=
      `<div class="product-container js-product">
            <div class="product-image-container">
              <img class="product-image"
                src="${items.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${items.name}
            </div>

            <div class="product-rating-container">
              <img class="product-rating-stars"
                src="images/ratings/rating-${items.rating.stars*10}.png">
              <div class="product-rating-count link-primary">
                ${items.rating.count}
              </div>
            </div>

            <div class="product-price">
              $${(items.priceCents*0.01).toFixed(2)}
            </div>

            <div class="product-quantity-container">
              <select class="js-quantity-selector-${items.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png">
              Added
            </div>
            <div>
            <p class="added-para js-added-para"></p>
            <button class="add-to-cart-button button-primary js-add-button" data-product-id="${items.id}">
              Add to Cart
            </button>
            </div>
          </div>  `;
  });
  // Copy HTML to Javascript
  document.querySelector('.js-products-grid').innerHTML=productHTMl;

  document.querySelectorAll('.js-add-button').forEach((buttonElement)=>{
      buttonElement.addEventListener('click',()=>{
          const itemID=buttonElement.dataset.productId;
          
          addToCart(itemID);
          updateCartQuantity();
          
          
        
      });
      
  });

}

function renderOrder(){
    const today=dayjs();
    const today_7=today.add(7,'day');
    const today_3=today.add(3,'day');

    const ship=[ ];
    let cartSumHTML=' ';
    let totalQuantity=0;
    details.forEach((cartItem)=>{

        const productId=cartItem.itemID;
        let matchingproduct;
        item.forEach((items)=>{
            if(items.id===productId){
                matchingproduct=items;
            }

        });





    cartSumHTML+=
    ` <div class="cart-item-container js-container-product-${matchingproduct.id}">
            <div class="delivery-date">
                Delivery date: ${today_7.format('dddd, MMMM D')}
            </div>

            <div class="cart-item-details-grid">
                <img class="product-image"
                src="${matchingproduct.image}">

                <div class="cart-item-details">
                <div class="product-name">
                    ${matchingproduct.name}
                </div>
                <div class="product-price">
                    ${(matchingproduct.priceCents/100).toFixed(2)}
                </div>
                <div class="product-quantity">
                    <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                    Update
                    </span>
                    <span class="delete-quantity-link link-primary js-delete" data-delete-button="${matchingproduct.id}">
                    Delete
                    </span>
                </div>
                </div>

                <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                <div class="delivery-option">
                    <input type="radio" 
                    class="delivery-option-input"
                    name="delivery-option-${matchingproduct.id}" value="0"  checked>
                    <div>
                    <div class="delivery-option-date">
                        ${today_7.format('dddd, MMMM D')}
                    </div>
                    <div class="delivery-option-price">
                        FREE Shipping
                    </div>
                    </div>
                </div>
                <div class="delivery-option">
                    <input type="radio" value="4.99"
                    class="delivery-option-input js-delivery-option-input"
                    name="delivery-option-${matchingproduct.id}" >
                    <div>
                    <div class="delivery-option-date">
                        ${today_3.format('dddd, MMMM D')}
                    </div>
                    <div class="delivery-option-price">
                        $4.99 - Shipping
                    </div>
                    </div>
                </div>
                <div class="delivery-option">
                    <input type="radio" value="9.99"
                    class="delivery-option-input"
                    name="delivery-option-${matchingproduct.id}">
                    <div>
                    <div class="delivery-option-date">
                        ${today.format('dddd, MMMM D')}
                    </div>
                    <div class="delivery-option-price">
                        $9.99 - Shipping
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    `;
    totalQuantity+=cartItem.quantity;

    });

    document.querySelector('.js-cart-grid').innerHTML=cartSumHTML;

    document.querySelectorAll('.js-delete').forEach((link)=>{
    link.addEventListener('click', ()=>{
        const ID = link.dataset.deleteButton;
        const container = document.querySelector(`.js-container-product-${ID}`);


        let existingItem;
        details.forEach(product => {
        if (product.itemID === ID) {
            existingItem = product;
        }
        });

        if (existingItem) {
        existingItem.quantity--;

        if (existingItem.quantity === 0) {
            removefromCart(ID);
            container.remove();
        } else {
            saveToCart();
            container.querySelector('.quantity-label').innerText = existingItem.quantity;
        }
        }
    });
    });


}
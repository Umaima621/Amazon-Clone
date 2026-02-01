
let details = JSON.parse(localStorage.getItem('cart'))||[
  {
    itemID: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2
  },
  {
    itemID: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:1
  }

];


function saveToCart(){
    localStorage.setItem('cart',JSON.stringify(details));
}
function addToCart(itemID){
    let existingItem;
        details.forEach(product=>{
            if(product.itemID===itemID){
                existingItem=product;
            }
            
        });
         if(existingItem){
            existingItem.quantity++;
            
         }
         else{
            details.push({
                itemID,
                quantity:1
            });
        }
         saveToCart();
}
function updateCartQuantity(){
    let totalquantity=0;
        details.forEach(product=>{
            totalquantity+=product.quantity;
        });
        
        
        document.querySelector('.js-cart-quantity').innerHTML=totalquantity;
}

function removefromCart(ID){
    const newCart=[];
        details.forEach((cartItem)=>{
            if(ID!==cartItem.itemID){
                newCart.push(cartItem);
            }
        });
        details=newCart;
         saveToCart();
}















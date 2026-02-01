function renderSummary(){
  document.querySelectorAll('.delivery-option-input').forEach((radio) => {
    radio.addEventListener('change', () => {
      calculateSummary();
    });
  });
  calculateSummary();
  function calculateSummary() {
    let total = 0;
    let totalShipping = 0;
    let totalQuantity = 0;

    details.forEach((product) => {
      const productId = product.itemID;
      let matchingProduct;

      item.forEach((items) => {
        if (items.id === productId) {
          matchingProduct = items;
        }
      });

      total += product.quantity * (matchingProduct.priceCents / 100);
      totalQuantity += product.quantity;

      const selectedShipping = document.querySelector(`input[name="delivery-option-${matchingProduct.id}"]:checked`);
      if (selectedShipping) {
        totalShipping += Number(selectedShipping.value);
      }
    });

    const subtotal = total + totalShipping;
    const tax = subtotal * 0.1;
    const grandTotal = subtotal + tax;

    const priceTotalHtml = `
      <div class="payment-summary">
        <div class="payment-summary-title">Order Summary</div>

        <div class="payment-summary-row">
          <div>Items (${totalQuantity}):</div>
          <div class="payment-summary-money">$${total.toFixed(2)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Shipping & handling:</div>
          <div class="payment-summary-money">$${totalShipping.toFixed(2)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div class="payment-summary-money">$${subtotal.toFixed(2)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Estimated tax (10%):</div>
          <div class="payment-summary-money">$${tax.toFixed(2)}</div>
        </div>

        <div class="payment-summary-row total-row">
          <div>Order total:</div>
          <div class="payment-summary-money">$${grandTotal.toFixed(2)}</div>
        </div>

        <button class="place-order-button button-primary">
          Place your order
        </button>
      </div>
    `;

    document.querySelector('.js-payment-summary').innerHTML = priceTotalHtml;
  }

}

// Wonda Luxe Main Script
let cart = JSON.parse(localStorage.getItem('wondaCart')) || [];

function formatPrice(price) {
  return '₦' + price.toLocaleString();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
  });
}

function saveCart() {
  localStorage.setItem('wondaCart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  showToast('Added to cart!');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
}

function updateQty(productId, change) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty += change;
    if (item.qty <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
    }
  }
}

function renderCart() {
  const cartItemsEl = document.getElementById('cart-items');
  const cartTotalEl = document.getElementById('cart-total');
  if (!cartItemsEl) return;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p style="text-align:center; color:#999; padding:2rem;">Your cart is empty</p>';
    cartTotalEl.textContent = '₦0';
    return;
  }

  let html = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    html += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <div>${formatPrice(item.price)}</div>
          <div class="qty-controls">
            <button onclick="updateQty('${item.id}', -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="updateQty('${item.id}', 1)">+</button>
            <button onclick="removeFromCart('${item.id}')" style="margin-left:auto; color:red; border:none; background:none;">✕</button>
          </div>
        </div>
      </div>
    `;
  });
  cartItemsEl.innerHTML = html;
  cartTotalEl.textContent = formatPrice(total);
}

function openCart() {
  document.getElementById('cart-sidebar').classList.add('open');
  renderCart();
}

function closeCart() {
  document.getElementById('cart-sidebar').classList.remove('open');
}

function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  
  let message = 'Hello Wonda Luxe! I would like to order the following:\n\n';
  let total = 0;
  cart.forEach(item => {
    const lineTotal = item.price * item.qty;
    total += lineTotal;
    message += `• ${item.name} x${item.qty} - ${formatPrice(lineTotal)}\n`;
  });
  message += `\n*Total: ${formatPrice(total)}*\n\nPlease confirm availability and delivery details. Thank you!`;
  
  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/2348064674290?text=${encoded}`;
  window.open(whatsappUrl, '_blank');
}

function showProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.getElementById('product-modal');
  document.getElementById('modal-image').src = product.image;
  document.getElementById('modal-name').textContent = product.name;
  document.getElementById('modal-price').textContent = formatPrice(product.price);
  document.getElementById('modal-description').textContent = product.description;
  document.getElementById('modal-ingredients').textContent = product.ingredients;
  document.getElementById('modal-add-btn').onclick = () => addToCart(productId);
  
  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('product-modal').classList.remove('active');
}

function showToast(msg) {
  const toast = document.createElement('div');
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%);
    background: #333; color: white; padding: 12px 24px; border-radius: 30px;
    z-index: 9999; animation: fadeInOut 2s forwards;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderCart();
  
  // Close modal on outside click
  document.getElementById('product-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'product-modal') closeModal();
  });
});

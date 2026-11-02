// Wonda Luxe Main Script
const WHATSAPP_NUMBER = '2348064674290';
const CART_KEY = 'wondaCart';

/* ---------- Helpers ---------- */
function formatPrice(price) {
  return '₦' + Number(price).toLocaleString('en-NG');
}

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function getProduct(id) {
  return products.find(p => p.id === id);
}

/* ---------- Cart state (stores only id + qty; details come from products.js) ---------- */
let cart = loadCart();

function loadCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(CART_KEY));
    if (!Array.isArray(raw)) return [];
    return raw
      .filter(i => i && getProduct(i.id) && Number.isInteger(i.qty) && i.qty > 0)
      .map(i => ({ id: i.id, qty: i.qty }));
  } catch (e) {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) { /* storage unavailable (private mode) – cart still works this session */ }
  updateCartCount();
  renderCart();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function addToCart(productId) {
  if (!getProduct(productId)) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) existing.qty += 1;
  else cart.push({ id: productId, qty: 1 });
  saveCart();
  showToast('Added to cart!');
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
}

function updateQty(productId, change) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += change;
  if (item.qty <= 0) removeFromCart(productId);
  else saveCart();
}

function renderCart() {
  const itemsEl = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    totalEl.textContent = formatPrice(0);
    return;
  }

  let total = 0;
  itemsEl.innerHTML = cart.map(item => {
    const p = getProduct(item.id);
    total += p.price * item.qty;
    const id = escapeHTML(item.id);
    return `
      <div class="cart-item">
        <img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}">
        <div class="cart-item-info">
          <strong>${escapeHTML(p.name)}</strong>
          <div>${formatPrice(p.price)}</div>
          <div class="qty-controls">
            <button type="button" aria-label="Decrease quantity" onclick="updateQty('${id}', -1)">−</button>
            <span>${item.qty}</span>
            <button type="button" aria-label="Increase quantity" onclick="updateQty('${id}', 1)">+</button>
            <button type="button" class="remove-item" aria-label="Remove item" onclick="removeFromCart('${id}')">✕</button>
          </div>
        </div>
      </div>`;
  }).join('');
  totalEl.textContent = formatPrice(total);
}

/* ---------- Cart sidebar ---------- */
function openCart() {
  document.getElementById('cart-sidebar').classList.add('open');
  document.getElementById('cart-sidebar').setAttribute('aria-hidden', 'false');
  document.getElementById('overlay').classList.add('active');
  renderCart();
}

function closeCart() {
  document.getElementById('cart-sidebar').classList.remove('open');
  document.getElementById('cart-sidebar').setAttribute('aria-hidden', 'true');
  if (!document.getElementById('product-modal').classList.contains('active')) {
    document.getElementById('overlay').classList.remove('active');
  }
}

function checkoutWhatsApp() {
  if (cart.length === 0) {
    showToast('Your cart is empty!');
    return;
  }
  let message = 'Hello Wonda Luxe! I would like to order the following:\n\n';
  let total = 0;
  cart.forEach(item => {
    const p = getProduct(item.id);
    const line = p.price * item.qty;
    total += line;
    message += `• ${p.name} x${item.qty} - ${formatPrice(line)}\n`;
  });
  message += `\n*Total: ${formatPrice(total)}*\n\nPlease confirm availability and delivery details. Thank you!`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
}

/* ---------- Product modal ---------- */
function showProductModal(productId) {
  const product = getProduct(productId);
  if (!product) return;

  const img = document.getElementById('modal-image');
  img.removeAttribute('src');          // avoid flashing the previous product's photo
  img.src = product.image;
  img.alt = product.name;
  document.getElementById('modal-name').textContent = product.name;
  document.getElementById('modal-price').textContent = formatPrice(product.price);
  document.getElementById('modal-description').textContent = product.description;

  const ingSection = document.getElementById('modal-ingredients-section');
  if (product.category === 'Accessories') {
    ingSection.style.display = 'none';
  } else {
    ingSection.style.display = '';
    document.getElementById('modal-ingredients').textContent = product.ingredients;
  }

  document.getElementById('modal-add-btn').onclick = () => addToCart(productId);
  document.getElementById('product-modal').classList.add('active');
  document.getElementById('overlay').classList.add('active');
  document.querySelector('#product-modal .close-modal').focus();
}

function closeModal() {
  document.getElementById('product-modal').classList.remove('active');
  if (!document.getElementById('cart-sidebar').classList.contains('open')) {
    document.getElementById('overlay').classList.remove('active');
  }
}

/* ---------- Product cards (shared by home + shop pages) ---------- */
function productCardHTML(p, showCategory) {
  const id = escapeHTML(p.id);
  return `
    <div class="product-card" data-id="${id}">
      <img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}" loading="lazy">
      <div class="product-info">
        <h3><button type="button" class="title-btn">${escapeHTML(p.name)}</button></h3>
        ${showCategory ? `<div class="product-cat">${escapeHTML(p.category)}</div>` : ''}
        <div class="price">${formatPrice(p.price)}</div>
        <button type="button" class="add-to-cart">Add to Cart</button>
      </div>
    </div>`;
}

function renderProductGrid(gridId, list, showCategory) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = list.map(p => productCardHTML(p, showCategory)).join('');
  if (!list.length) grid.innerHTML = '<p class="cart-empty">No products in this category yet.</p>';
}

// One delegated click handler for every card on the page
document.addEventListener('click', (e) => {
  const card = e.target.closest('.product-card');
  if (!card) return;
  const id = card.dataset.id;
  if (e.target.closest('.add-to-cart')) addToCart(id);
  else showProductModal(id);
});

/* ---------- Toast ---------- */
function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

/* ---------- Shared page chrome (modal, cart, overlay, WhatsApp button) ---------- */
function injectChrome() {
  const html = `
    <a href="https://wa.me/${WHATSAPP_NUMBER}" class="whatsapp-float" target="_blank" rel="noopener" title="Chat on WhatsApp" aria-label="Chat on WhatsApp">💬</a>

    <div class="overlay" id="overlay"></div>

    <div class="modal" id="product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-name">
      <div class="modal-content">
        <button type="button" class="close-modal" aria-label="Close" onclick="closeModal()">&times;</button>
        <img id="modal-image" src="" alt="">
        <h2 id="modal-name"></h2>
        <p class="price" id="modal-price"></p>
        <p id="modal-description" class="modal-desc"></p>
        <div id="modal-ingredients-section">
          <h4>Ingredients</h4>
          <div class="ingredients" id="modal-ingredients"></div>
        </div>
        <button type="button" class="btn-primary modal-add" id="modal-add-btn">Add to Cart</button>
      </div>
    </div>

    <aside class="cart-sidebar" id="cart-sidebar" aria-label="Shopping cart" aria-hidden="true">
      <div class="cart-header">
        <h3>Your Cart</h3>
        <button type="button" class="cart-close" aria-label="Close cart" onclick="closeCart()">&times;</button>
      </div>
      <div class="cart-items" id="cart-items"></div>
      <div class="cart-footer">
        <div class="cart-total"><span>Total:</span><span id="cart-total">₦0</span></div>
        <button type="button" class="whatsapp-checkout" onclick="checkoutWhatsApp()">💬 Checkout via WhatsApp</button>
      </div>
    </aside>`;
  document.body.insertAdjacentHTML('beforeend', html);
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  injectChrome();
  updateCartCount();
  renderCart();

  document.getElementById('overlay').addEventListener('click', () => { closeModal(); closeCart(); });
  document.getElementById('product-modal').addEventListener('click', (e) => {
    if (e.target.id === 'product-modal') closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModal(); closeCart(); }
  });

  if (typeof initPage === 'function') initPage();
});

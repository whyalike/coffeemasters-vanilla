import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

// Link my web components
import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';
import { CartItem } from './components/CartItem.js';
import ProductItem from './components/ProductItem.js';

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener('DOMContentLoaded', () => {
  app.router.init();
  loadData();
});

window.addEventListener('appcartchange', (event) => {
  const badge = document.getElementById('badge');
  const qty = app.store.cart.reduce((acc, p) => acc + p.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});

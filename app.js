import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Order.js';

window.app = {};
app.store = Store;

window.addEventListener('DOMContentLoaded', () => {
  loadData();
});

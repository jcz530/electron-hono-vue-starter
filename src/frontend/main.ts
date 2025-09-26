import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/main.css';

console.log('👋 Vue app starting in Electron renderer process');

// Create and mount Vue app
const app = createApp(App);
app.use(router);
app.mount('#app');

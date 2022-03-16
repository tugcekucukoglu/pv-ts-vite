import { createApp } from 'vue';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import StyleClass from 'primevue/styleclass';
import Ripple from 'primevue/ripple';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';

const app = createApp(App);

app.use(PrimeVue, { ripple: true });
app.directive('styleclass', StyleClass);
app.directive('ripple', Ripple);

app.component('Button', Button);
app.component('InputNumber', InputNumber);

app.mount('#app');

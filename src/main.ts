import Vue from 'vue';
import {
  Button,
  Cell,
  CellGroup,
  DatetimePicker,
  Field,
  Icon,
  Lazyload,
  List,
  Picker,
  Search,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem,
} from 'vant';
import 'vant/lib/vant-css/base.css';
import 'vant/lib/vant-css/button.css';
import 'vant/lib/vant-css/cell.css';
import 'vant/lib/vant-css/field.css';
import 'vant/lib/vant-css/icon.css';
import 'vant/lib/vant-css/icon-local.css';
import 'vant/lib/vant-css/picker.css';
import 'vant/lib/vant-css/search.css';
import 'vant/lib/vant-css/swipe.css';
import 'vant/lib/vant-css/tab.css';
import 'vant/lib/vant-css/tabbar.css';
import App from './App.vue';
import Fetch from './libs/Fetch';
import router from './router';
import './registerServiceWorker';
import './styles/app.css';

Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(DatetimePicker);
Vue.use(Icon);
Vue.use(Field);
Vue.use(Lazyload);
Vue.use(List);
Vue.use(Picker);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.prototype.$fetch = new Fetch('//dev.api.com');

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

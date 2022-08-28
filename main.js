// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import {
	$http
} from '@escook/request-miniprogram'
Vue.config.productionTip = false
uni.$http = $http
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif

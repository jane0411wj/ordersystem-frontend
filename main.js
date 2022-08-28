// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import { $http } from '@escook/request-miniprogram'
Vue.config.productionTip = false
uni.$http = $http
App.mpType = 'app'
$http.baseUrl = 'https://www.example.com'
$http.beforeRequest = function (options) {
  wx.showLoading({
    title: '数据加载中...',
  })
}
// 请求开始之前做一些事情
$http.beforeRequest = function (options) {
  if (options.url.indexOf('/home/catitems') !== -1) {
    options.header = {
      'X-Test': 'AAA',
    }
  }
}
// 请求完成之后做一些事情
$http.afterRequest = function () {
  // do something...
}
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

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		shopCartList:[],
		remarkList:[],
		 reversionId:'',
	},
	mutations:{
	
		changeShopList(state,list){
			// 修改全局的状态
			state.shopCartList =list;
		},
		setReversionId(state,id)
		{
			state.reversionId=id;
		},
		addRemarkList(state,list)
		{
			state.remarkList=list
		}
	},
	actions:{	// 异步获取方法
	 async	getShopList(context){
			const {
				data: res
			} = await uni.$http.get('/shoppingCart/'+this.state.reversionId)
			if (res) {
				context.commit('changeShopList',res)
			}
		},
		async getRemarks(context) {
			const {
				data: res
			} = await uni.$http.get('/remarks/5')
			if (res) {
			 context.commit('addRemarkList',res)
			}
		},
		
	}
})
export default store
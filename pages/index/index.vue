<template>
	<view class="mainPage">
		<topBar></topBar>
		<view class="center_page">
			<template v-if="barIndex==1">
				<view class="type">
				<view class="t_name">
					菜单种类:
				</view>	
				<view class="select">
					
				<uni-data-select  @change="selectList" :localdata="markList" placeholder="请选择备注"
					v-model="selectValue"></uni-data-select>
					</view>
					</view>
				<template v-if="dataList.length>0">
					<goods-item @click.native="toggle(data)" v-for="(data,index) in dataList" :key="index" :data='data'>
					</goods-item>
				 <no-data></no-data>
				</template>
			</template>
			<view v-else class="">
				<order-item v-if="orderList.length>0" v-for="(data,index) in orderList" :key="index" :data='data'>
				</order-item>
				<noData v-else></noData>
			</view>
		</view>
		<bottom-bar @barClick="barClick"></bottom-bar>
		<addCartDialog ref="dialog" :data="handleData"></addCartDialog>
<view>sdff</view>
	</view>
</template>

<script>
	import noData from '../../components/no_data.vue'
	import topBar from '../../components/shopNameTop.vue'
	import goodsItem from './components/goodsItem/goodsItem.vue'
	import orderItem from './components/orderItem/orderItem.vue'
	import bottomBar from '../../components/bottomBar.vue'
	import addCartDialog from '../../components/add_cat_dialog.vue'
	import {
			mapState,
			mapActions
		} from 'vuex'
	export default {
		components: {
			topBar,
			noData,
			goodsItem,
			bottomBar,
			orderItem,
			addCartDialog
		},
		data() {
			return {
				barIndex: 1,
				dataList: [],
				handleData: null,
				orderList: [],
				selectValue:'',
				selecList:[ { value: 0, text: "篮球" },
        { value: 1, text: "足球" },
        { value: 2, text: "游泳" },]
			}
		},
		mounted() {
			this.checkCanOrder()
			this.$store.dispatch('getRemarks');
		},
		methods: {
		...mapActions(['getShopList']),
			async checkCanOrder() {
				uni.showLoading({
					title: '数据加载中'
				})
				const {
					data: res
				} = await uni.$http.get('/reservation/123456')
				if (res) {
					this.$store.commit('setReversionId',res);
					this.getShopList();
					this.getProductList();
				} else {
					uni.showToast({
						title: '该用户暂无点单权限',
						icon: 'exception',
						duration: 850
					});
				}
				uni.hideLoading()
				this.orderList = res;
			},

			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			toggle(data) {
				this.handleData = data;
				this.$refs.dialog.$refs.popup.open('')
			},
			barClick(index) {
				this.barIndex = index
				if (index == 1) {
					this.getProductList()
				} else {
					this.getOrderList()
				}
			},
			async getOrderList() {
				uni.showLoading({
					title: '数据加载中'
				})
				const {
					data: res
				} = await uni.$http.get('/history/'+this.$store.state.reversionId)
				uni.hideLoading()
				this.orderList = res;
			},
			async getProductList() {
				uni.showLoading({
					title: '数据加载中'
				})
				const {
					data: res
				} = await uni.$http.get('/products')
				uni.hideLoading()
				this.dataList = res;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import url("@/static/main.scss");
.type{
	display: flex;
	align-items: center;
	margin-bottom: 20rpx;
	border-bottom: 1px solid #ddd;
	padding-bottom: 20rpx;
	.t_name{
		margin-right: 20rpx;
	}
	.select{
		width: 400rpx;
	}
}
	.container {
		width: 750rpx;
		box-sizing: border-box;
		padding: 20rpx;
		font-size: 14rpx;
		line-height: 24rpx;
	}
</style>

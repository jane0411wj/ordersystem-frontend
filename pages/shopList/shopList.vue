<template>
	<view class="mainPage">
		<topBar></topBar>
		<view class="center_page">
			<template v-if="shopCartList.length>0">
				<goodsItem v-for="(data,index) in shopCartList" :key="index" :data='data'></goodsItem>
			</template>
			<noData v-else></noData>
		</view>
		<bottom-bar @barClick="barClick"></bottom-bar>
		<!-- 提示信息弹窗 -->
		<uni-popup ref="message" type="message">
			<uni-popup-message type="msgType" message="After your order is placed, please approach our service screw for the amendment.
" :duration="2000"></uni-popup-message>
		</uni-popup>
	</view>
</template>

<script>
	import noData from '../../components/no_data.vue'
	import topBar from '../../components/shopCatTop.vue'
	import goodsItem from '../../components/shopCartItem.vue'
	import bottomBar from '../../components/shopChat_bottom.vue'
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		components: {
			topBar,
			goodsItem,
			bottomBar,
			noData

		},
		computed: {
			...mapState(['shopCartList'])
		},
		data() {
			return {
				barIndex: 1,
			}
		},
		mounted() {},
		methods: {
			...mapActions(['getShopList']),
			async purchase() {

				uni.showLoading({
					title: '正在加载中'
				})
				const {
					data: res
				} = await uni.$http.post('/shoppingCart/purchase/' + this.$store.state.reversionId)
				uni.showToast({
					title: '操作成功',
					icon: 'exception',
					duration: 850
				});
				this.$refs && this.$refs.message.open();
			setTimeout(function(){
				uni.navigateTo({
					url: '../index/index'
			
				});
			},2000);


				this.getShopList();

				uni.hideLoading()
			},
			async checkCanOrder() {
				uni.showLoading({
					title: '正在加载中'
				})
				const {
					data: res
				} = await uni.$http.get('/reservation/123456')
				if (res) {
					this.purchase();
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
			toggle() {
				this.$refs.dialog.$refs.popup.open('')
			},
			barClick(index) {
				console.log(index),
					this.barIndex = index;
				if (index == 1) {
					uni.navigateBack()
				} else {
					console.log(this.shopCartList.length);
					if (this.shopCartList.length==0) {
						uni.showToast({
							title: '购物车暂无可购买的商品',
							icon: 'none',
							duration: 850
						});
						return
					}
					this.checkCanOrder()
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import url("@/static/main.scss");

	.container {
		width: 750rpx;
		box-sizing: border-box;
		padding: 20rpx;
		font-size: 14rpx;
		line-height: 24rpx;
	}
</style>

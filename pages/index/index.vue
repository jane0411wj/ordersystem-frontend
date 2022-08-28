<template>
	<view class="mainPage">
		<topBar></topBar>
		<view class="center_page">
			<template v-if="barIndex==1">
				<goods-item @click="toggle()"></goods-item>
				<goods-item></goods-item>
				<goods-item></goods-item>
				<goods-item></goods-item>
			</template>
			 <view v-else class="">
			 	 <order-item></order-item>
			 </view>
		</view>
		<bottom-bar @barClick="barClick"></bottom-bar>
		<addCartDialog ref="dialog"></addCartDialog>

	</view>
</template>

<script>
	import topBar from '../../components/shopNameTop.vue'
	import goodsItem from './components/goodsItem/goodsItem.vue'
	import orderItem from './components/orderItem/orderItem.vue'
	import bottomBar from '../../components/bottomBar.vue'
	import addCartDialog from '../../components/add_cat_dialog.vue'
	export default {
		components: {
			topBar,
			goodsItem,
			bottomBar,orderItem,
			addCartDialog
		},
		data() {
			return {
                barIndex:1,
			}
		},
		methods: {
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			toggle() {
				this.$refs.dialog.$refs.popup.open('')
			},
			barClick( index)
			{
				this.barIndex=index
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

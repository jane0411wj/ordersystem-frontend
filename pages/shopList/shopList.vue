<template>
	<view class="mainPage">
		<topBar></topBar>
		<view class="center_page">
			<goodsItem></goodsItem>
		</view>
 <bottom-bar @barClick="barClick"></bottom-bar>
	</view>
</template>

<script>
	import topBar from '../../components/shopCatTop.vue'
	import goodsItem from '../../components/shopCartItem.vue'
	import bottomBar from '../../components/shopChat_bottom.vue'
	export default {
		components: {
			topBar,goodsItem,bottomBar
		
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
			barClick(index)
			{
				console.log(index),
				this.barIndex=index;
				if(index==1)
				{
			  uni.navigateBack()
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

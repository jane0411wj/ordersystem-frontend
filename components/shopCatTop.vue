<template>
	<view class="top_bar">
		<view class="info">
			<view class="shop_about">
				<image src="../static/images/shopName.png" ></image>
				<view class="shopName">CONFIRM ORDER
</view>
			</view>
		
		</view>
	</view>
</template>

<script>
	export default {
		name:"shopNameTop",
		data() {
			return {
				
			};
		},
		methods:{
			goShopCartList()
			{
				uni.navigateTo({
					url:'../shopList/shopList'
				})
			}
		}
	}
</script>

<style lang="scss">
.info{
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 20rpx;
	border-bottom: 1px solid #dddddd;
	.shop_about{
		display: flex;
		align-items:center;
		
		image{
			width: 80rpx;
			height: 80rpx;
		}
		.shopName{
			font-size: 34rpx;
			color: #333333;
			margin-left: 20rpx;
		}
	}
	.shopCart{
		image{
			width: 60rpx;
			height: 60rpx;
		}
	}
}
</style>
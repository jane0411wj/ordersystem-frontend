<template>
	<view class="top_bar">
		<view class="info">
			<view class="shop_about">
				<image src="../static/images/shopName.png" ></image>
				<view class="shopName">Westlake 西湖小吃</view>
			</view>
			<view class="shopCart" @click="goShopCartList">
				<view class="product_num" v-if="shopCartList.length>0">{{shopCartList.length}}</view>
				 <image src="../static/images/gouwuche.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		name:"shopNameTop",
		data() {
			return {
				
			};
		},
		computed: {
			...mapState(['shopCartList'])
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
		position: relative;
		.product_num{
			position: absolute;
			padding: 0rpx 15rpx;
			color: white;
			font-size: 10rpx;
			border-radius: 50%;
			background-color:#f12f0d;
			right: -15rpx;
			top: -15rpx;
			z-index: 2;
			text-align: center;
			
		}
		image{
			z-index: 1;
			width: 60rpx;
			height: 60rpx;
		}
	}
}
</style>
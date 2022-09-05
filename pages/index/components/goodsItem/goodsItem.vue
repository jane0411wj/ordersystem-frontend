<template>
	<view class="goodsItem">
		<view class="goods_box">
			<image src="../../../../static/images/meishi.jpg" class="img"></image>
			<view class="goods_info">
				<view class="goods_name">
					{{data.name}}
				</view>
				<view class="desc">
					{{data.description}}
				</view>
			</view>
		</view>
		<view class="price">
			<text class="uint">SGD</text>
			<text class="num">{{data.unitPrice}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			data: {
				type: Object,
				default: {},
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.goodsItem {
		display: flex;
		padding-bottom: 20rpx;
		padding-top: 20rpx;
		border-bottom: 1rpx solid #cccccc;
		.img {
			width: 200rpx;
			height: 170rpx;
		}
		.goods_box{
			display: flex;
			width: 650rpx;
			.goods_info{
				padding-left: 15rpx;
				flex: 1;
			}
			.goods_name{
				font-size: 32rpx;
			}
			.desc{
				margin-top: 10rpx;
				font-size: 26rpx;
				color: #999999;
			}
		}
		.price{
			text-align: right;
			color: #f12f0d;
			.num{
				padding-left: 6rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.unit{
			font-size: 20rpx;
			display: inline-block;
		}
	}
</style>

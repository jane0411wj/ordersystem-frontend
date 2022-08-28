<template>
	<view class="goodsItem">
		<view class="goods_box">
			<image src="../../../../static/images/meishi.jpg" class="img"></image>
			<view class="goods_info">
				<view class="goods_name">
					精品红烧肉
				</view>
				<view class="desc">
					精品红烧肉精品红烧肉精品红烧肉精品红烧肉精品红烧肉,精品红烧肉
				</view>
			</view>
		</view>
		<view class="price">
			<text class="uint">$</text>
			<text class="num">150.22</text>
		</view>
	</view>
</template>

<script>
	export default {
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
			font-size: 32rpx;
			color: #f12f0d;
			.unit{
				font-size: 32rpx;
				display: inline-block;
			}
			.num{
				padding-left: 6rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
	}
</style>

<template>
	<view class="goodsItem">
		<view class="goods_left">
			<view class="goods_info">
				<view class="goods_top">
					<view class="goods_name">精品红烧肉</view>
					<view class="order_num"><text>1</text>份</view>
				</view>
				<view class="price">
					<text class="uint">$</text>
					<text class="num">150.22</text>
				</view>
			</view>
			<view class="goods_bottom">
				<view class="desc">
					精品红烧肉精品红烧肉精品红烧肉精品红烧肉精品红烧肉,精品红烧肉
				</view>
				<view class="marks">少盐少辣，多汤，再来</view>
			</view>
		</view>
<view class="goods_right">
	<uni-icons type="close" size="26" class="close"></uni-icons>
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
	.goodsItem{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.goods_left{
		flex: 1;
	}
	.goods_right{
		width: 80rpx;
		color: #999999;
		text-align: right;
	}
	.goods_bottom {
		display: flex;
		color: #999999;
		font-size: 26rpx;
		margin-top: 20rpx;

		.marks {
			margin-left: 50rpx;
		}

		.desc {
		}
	}

	.goods_info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.goods_top {
		margin-right: 60rpx;
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.order_num {
			font-size: 30rpx;

			text {
				padding-right: 10rpx;
				color: #f12f0d;
				font-size: 35rpx;
			}
		}
	}

	.goodsItem {
		padding-bottom: 20rpx;
		padding-top: 20rpx;
		border-bottom: 1rpx solid #cccccc;

		.img {
			width: 200rpx;
			height: 170rpx;
		}



		.goods_info {
			padding-left: 15rpx;
			flex: 1;
		}

		.goods_name {
			font-size: 32rpx;
		}

		.desc {
			font-size: 26rpx;
			color: #999999;
		}
	}

	.price {
		text-align: right;
		font-size: 32rpx;
		color: #f12f0d;

		.unit {
			font-size: 32rpx;
			display: inline-block;
		}

		.num {
			padding-left: 6rpx;
			font-size: 32rpx;
			font-weight: bold;
		}
	}
	.close{
		color: #a1a1a1  !important;
	}
</style>

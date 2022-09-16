<template>
	<view class="goodsItem">
		<view class="goods_info">
			<view class="goods_top">
				<view class="goods_name">{{data.product.name}}</view>
				<view class="order_num">Qty:<text>{{data.stock}}</text></view>
			</view>
			<view class="price">
				<text class="uint">SGD</text>
				<text class="num">{{confirmNum(data.product.unitPrice)}}</text>
			</view>
		</view>
		<view class="goods_bottom">
			<view class="desc">
				{{data.product.description}}
			</view>
			<view class="marks">{{remark}}</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		props: {
			data: {
				type: Object,
				default:()=>{}
			}
		},
		computed:{
		...mapState(['remarkList']),
		remark() {
			let dd = this.remarkList.filter((item, index) => {
				return item.id == this.data.remarkId
			})
		
			return dd.length > 0 ? dd[0].remark : ''
		}
		},
		data() {
			return {
           dataList:[]
			}
		},
		mounted()
		{
			// this.getProductList();
		},
		methods: {
			async getProductList() {
				uni.showLoading({
					title: '数据加载中'
				})
				uni.request({
					url: 'https://dev.posyber.com/history',
					success: (res) => {
						uni.hideLoading();
						if (res.statusCode == 200) {
							this.dataList = res.data;
						}
					},
					fail: () => {
						uni.hideLoading();
					}
				})
				// const {data:res}=await uni.$http.get('/products')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods_bottom {
		display: flex;
		justify-content: space-between;
		color: #999999;
		font-size: 26rpx;
		margin-top: 10rpx;

		.marks {
			margin-left: 50rpx;
		}

		.desc {
			// width: 600rpx;
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
			// padding-left: 15rpx;
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
		color: #f12f0d;

		.unit {
			font-size: 20rpx;
			display: inline-block;
		}

		.num {
			padding-left: 6rpx;
			font-size: 28rpx;
			font-weight: bold;
		}
	}
</style>

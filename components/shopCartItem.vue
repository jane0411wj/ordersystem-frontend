<template>
	<view class="goodsItem">
		<view class="goods_top_b">
			
		<view class="goods_left">
			<view class="goods_info">
				<view class="goods_top">
					<view class="goods_name"> {{data.product.name}}</view>
					<view class="order_num">
						<uni-number-box :min="1" :value="data.stock" :isMin="true" :index="1" @change="numberChange">
						</uni-number-box>
						<!-- <text>{{data.stock}}</text>份 -->
					</view>
				</view>
				<view class="price">
					<text class="uint" style="font-size: 30rpx;">SGD</text>
					<text class="num">{{ confirmNum(data.stock*data.product.unitPrice)}}</text>
				</view>
			</view>
			</view>
			<view class="goods_bottom">
				<view class="desc">
					{{data.product.description}}
				</view>
				<view>
					{{remark}}
				</view>
			</view>
		</view>
		<view class="goods_right">
			<uni-icons type="close" size="26" class="close" @click="deleteProduct()"></uni-icons>
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
				default: {},
			}
		},
		data() {

		},
		computed: {
			...mapState(['remarkList']),
			remark() {
				let dd = this.remarkList.filter((item, index) => {
					return item.id == this.data.remarkId
				})

				return dd.length > 0 ? dd[0].remark : ''
			}
		},
		mounted() {
			console.log(this.remarkList)
		},
		data() {
			return {

			}
		},
		methods: {
			...mapActions(['getShopList']),
			async deleteProduct() {
				uni.showLoading({
					title: '数据加载中'
				})
				const {
					data: res
				} = await uni.$http.delete('/shoppingCart/' + this.data.id)
				this.getShopList();
				uni.showToast({
					title: '操作成功',
					icon: 'exception',
					duration: 850
				});
				uni.hideLoading()
			},
			numberChange(index)
			{
				this.upDateNumber(index);
			},
			async upDateNumber(index) {
				uni.showLoading({
					title: '数据加载中'
				})
				var params = {
					"productId": this.data ? this.data.id : '',
					"stock": index
				}
				const {
					data: res
				} = await uni.$http.put('/shoppingCart/' + this.data.id,params)
				this.getShopList();
				uni.hideLoading()
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep .uni-numbox__minus {
		padding: 0 4rpx;
	}
.goods_top_b{
	flex: 1;
}
	.goodsItem {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.goods_left {
		flex: 1;
	}

	.goods_right {
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

		.desc {}
	}

	.goods_info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.goods_top {
		margin-right: 20rpx;
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
		font-size: 32rpx;
		color: #f12f0d;

		.unit {
			font-size: 10rpx;
			display: inline-block;
		}

		.num {
			padding-left: 6rpx;
			font-size: 32rpx;
			font-weight: bold;
		}
	}

	.close {
		color: #a1a1a1 !important;
	}
	.goods_bottom{
		display: flex;
		justify-content: space-between;
	}
</style>

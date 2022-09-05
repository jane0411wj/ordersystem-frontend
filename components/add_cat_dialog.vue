<template>
	<view>
		<uni-popup ref="popup" background-color="#fff" :mask-click="false" class='add_p_pop'>
			<uni-popup-dialog mode="input" message="成功消息" confirmText="Order" cancelText="Back" title="加入购物车"
				:duration="2000" :before-close="true" @close="close" @confirm="confirm">
				<view class="dialog_body" v-if="data">
					<view class="top">
						<view class="goods_info">
							<view class="name">{{data?data.name:''}}</view>
							<view class="desc">
								{{data.description}}
							</view>
						</view>
						<view class="price">
							<text class="uint">$</text>
							<text class="num">{{data.unitPrice}}</text>
						</view>
					</view>
					<view class="remark_box">
						<uni-data-select @change="selectTypeChange" :localdata="markList" placeholder="请选择备注"
							v-model="markId"></uni-data-select>
					</view>
					<view class="add_box">
						<uni-number-box :min="1" :value="dataNumber" :isMin="true" :index="1" @change="numberChange">
						</uni-number-box>
					</view>
					<view class="total_price">
						总价:<text class="total_num">SGD {{totalPrice}}</text>
					</view>
				</view>
			</uni-popup-dialog>
		</uni-popup>
		<!-- 提示信息弹窗 -->
		<uni-popup ref="message" type="message">
			<uni-popup-message type="msgType" message="Please confirm your order at the top right corner."
				:duration="2000"></uni-popup-message>
		</uni-popup>
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
		name: "add_cat_dialog",
		computed: {
			totalPrice() {
				return this.data.unitPrice * this.dataNumber
			}
		},

		data() {
			return {
				dataNumber: 1,
				markId: '',
				markList: [],
			};
		},
		created() {},
		mounted() {
			this.getRemarks()
		},
		methods: {
			close() {
				this.$refs && this.$refs.popup.close()
			},
			confirm() {
				this.addCart()
			},
			selectTypeChange(e) {
				console.log("index：" + e)
				this.markId = e;
			},
			numberChange(data) {
				this.dataNumber = data;
			},
			async addCart() {
				uni.showLoading({
					title: '数据加载中'
				})
				var params = {
					"productId": this.data ? this.data.id : '',
					"stock": this.dataNumber,
					"status": "NOT_PURCHASED",
					'checkinOtp': 123456,
					
				}
				if(this.markId)
				{
					params={...params,	'remarkId': this.markId}
				}
				const {
					data: res
				} = await uni.$http.post('/shoppingCart', params)
				if (res) {
					uni.hideLoading();
					this.$store.dispatch('getShopList');
					this.$refs.popup.close()
					this.$refs && this.$refs.message.open();
				}

			},
			async getRemarks() {
				const {
					data: res
				} = await uni.$http.get('/remarks/5')
				if (res) {
					this.markList = res.map((e) => {
						return {
							...e,
							value: e.id,
							text: e.remark
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
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

	.dialog_body {
		width: 100%;
	}

	 .add_p_pop ::v-deep.uni-popup .uni-popup__wrapper {
		width: 600rpx !important;

		.uni-popup-dialog {
			width: 100% !important;
		}

		.uni-dialog-title {
			padding-bottom: 20rpx;
		}

		.uni-dialog-content {
			border-top: 1rpx solid #cccccc;
		}
	}

	.top {
		display: flex;
		justify-content: space-between;

		.goods_info {
			margin: 0rpx;
		}

		.name {
			font-size: 32rpx;
		}

		.desc {
			margin-top: 10rpx;
			font-size: 26rpx;
			color: #999999;
		}

	}

	.selectType {
		width: 400rpx;
		margin-top: 20rpx;
		height: 60rpx;

		option {
			padding-right: 0;
			width: 400rpx;
		}
	}

	.remark_box {
		margin-top: 20rpx;
	}

	.add_box {
		text-align: center;
		margin-top: 40rpx;
		margin-bottom: 40rpx;
		padding-bottom: 40rpx;
		border-bottom: 1rpx solid #cccccc;
	}



	.total_price {
		text-align: right;

		text {
			color: #f12f0d;
			padding-left: 20rpx;
			font-size: 30rpx;
			font-weight: bold;
		}

		margin-bottom: 40rpx;
	}
</style>

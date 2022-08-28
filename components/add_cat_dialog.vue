<template>
	<view>
		<uni-popup ref="popup" background-color="#fff" @change="change" :mask-click="false">
			<uni-popup-dialog mode="input" message="成功消息" confirmText="Order" cancelText="Back" title="加入购物车"
				:duration="2000" :before-close="true" @close="close" @confirm="confirm">
				<view class="dialog_body">
					<view class="top">
						<view class="goods_info">
							<view class="name">精品红烧肉</view>
							<view class="desc">
								精品红烧肉精品红烧肉精品红烧肉精品红烧肉精品红烧肉
							</view>
						</view>
						<view class="price">
							<text class="uint">$</text>
							<text class="num">150.22</text>
						</view>
					</view>
					<view class="remark_box">
						<uni-data-select @change="selectTypeChange" :localdata="range" placeholder="请选择月份"
							v-model="editSelectTypeLists"></uni-data-select>
					</view>
					<view class="add_box">
						<uni-number-box :min="1" :value="dataNumber" :isMin="true" :index="1"
							@eventChange="numberChange"></uni-number-box>
					</view>
					<view class="total_price">
						总价:<text class="total_num">1200</text>
					</view>
				</view>
			</uni-popup-dialog>
		</uni-popup>
		<!-- 提示信息弹窗 -->
		<uni-popup ref="message" type="message">
			<uni-popup-message :type="msgType" message="Please confirm your order at the top right corner." :duration="2000"></uni-popup-message>
		</uni-popup>
	</view>
</template>

<script>
	export default {
	
		name: "add_cat_dialog",
		data() {
			return {
				dataNumber: 1,
				editSelectTypeLists: '',
				range: [{
						value: 0,
						text: "篮球"
					},
					{
						value: 1,
						text: "足球"
					},
					{
						value: 2,
						text: "游泳"
					},
				],
			};
		},
		created() {},
		methods: {
			close() {
				this.$refs.popup.close()
			},
			confirm() {
				this.$refs.message.open();
				// this.$refs.popup.close()
			},
			selectTypeChange(e) {
				console.log("index：" + e)
			},
			numberChange(data) {
				this.dataNumber = data.number;
			},
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

	.dialog_body {}

	::v-deep.uni-popup .uni-popup__wrapper {
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

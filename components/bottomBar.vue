<template>
	<view class="bottomBar">
		<view class="menuItem" @click="menuClick(item.value)" :class="{'active':index==item.value}"
			v-for="(item,key) in menus" :key="key">
			{{item.text}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			currentIndex: {
				type: Number,
				default: 1,
			}
		},
		data() {
			return {
				index: 1,
				menus: [{
						value: 1,
						text: "Menu"
					},
					{
						value: 2,
						text: "Orders"
					}
				]
			}
		},
		created() {
			this.index = this.currentIndex;
		},
		methods: {
			menuClick(index) {
				this.index = index;
				this.$emit('barClick',index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bottomBar {
		display: flex;
		justify-content: space-between;

		.menuItem {
			width: 50%;
			text-align: center;
			height: 100rpx;
			border-top: 1px solid #dddddd;
			line-height: 100rpx;
			font-size: 32rpx;

			&.active {
				color: red;
				box-shadow: 0px 0px 10px #f0f0f0;
			}

			&:first-child {
				border-right: 1px solid #dddddd;
			}
		}
	}
</style>

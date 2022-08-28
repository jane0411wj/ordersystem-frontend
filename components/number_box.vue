<template>
	<view class="uni-numbox">
		<view class="uni-numbox-minus" 
			@click="_calcValue('subtract')"
		>
			<text class="icon iconfont icon-minus-square" :class="minDisabled?'uni-numbox-disabled': ''" ></text>
		</view>
		<input 
			class="uni-numbox-value" 
			type="number" 
			:disabled="disabled"
			:value="inputValue" 
			
			@blur="_onBlur"
		>
		<view 
			class="uni-numbox-plus" 
			@click="_calcValue('add')"
		>
			<text class="icon iconfont icon-jia" :class="maxDisabled?'uni-numbox-disabled': ''" ></text>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
		// isMax  是否有上限设置
			isMax: {
				type: Boolean,
				default: false
			},
			// isMin  是否有下限设置
			isMin: {
				type: Boolean,
				default: false
			},
			// index 唯一值，如果一个页面有多个数量增减组件时，起到唯一的作用
			index: {
				type: String,
				default: 0
			},
			// value 是数值
			value: {
				type: Number,
				default: 0
			},
			// min 最小值
			min: {
				type: Number,
				default: -Infinity
			},
			// max 最大值
			max: {
				type: Number,
				default: Infinity
			},
			// step  步长
			step: {
				type: Number,
				default: 1
			},
			// disabled 是否禁用
			disabled: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				inputValue: this.value,
				minDisabled: false,
				maxDisabled: false
			}
		},
		created(){
			this.maxDisabled = this.isMax;
			this.minDisabled = this.isMin;
		},
		computed: {

		},
		watch: {
			inputValue(number) {
				const data = {
					number: number,
					index: this.index
				}
				this.$emit('eventChange', data);
			}
		},
		methods: {
			_calcValue(type) {
				const scale = this._getDecimalScale();
				let value = this.inputValue * scale;
				let newValue = 0;
				let step = this.step * scale;
				
				if(type === 'subtract'){
					newValue = value - step;
					if (newValue <= this.min){
						this.minDisabled = true;
					}
					if(newValue < this.min){
						newValue = this.min
					}
					if(newValue < this.max && this.maxDisabled === true){
						this.maxDisabled = false;
					}
				}else if(type === 'add'){
					newValue = value + step;
					if (newValue >= this.max){
						this.maxDisabled = true;
					}
					if(newValue > this.max){
						newValue = this.max
					}
					if(newValue > this.min && this.minDisabled === true){
						this.minDisabled = false;
					}
				}
				if(newValue === value){
					return;
				}
				this.inputValue = newValue / scale;
			},
			_getDecimalScale() {
				let scale = 1;
				// 浮点型
				if (~~this.step !== this.step) {
					scale = Math.pow(10, (this.step + '').split('.')[1].length);
				}
				return scale;
			},
			_onBlur(event) {
				let value = event.detail.value;
				if (!value) {
					this.inputValue = 0;
					return
				}
				value = +value;
				if (value > this.max) {
					value = this.max;
				} else if (value < this.min) {
					value = this.min
				}

				this.inputValue = value
			}
		}
	}
</script>
<style lang="scss" scoped>
	
</style>

function geshihua(num){
			var dataval = parseInt(num);
			var data2 = dataval.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
			return  data2;
		}

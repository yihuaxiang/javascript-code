function createCompareFun(name){
	return function(obj1,obj2){
		var one=obj1[name];
		var two=obj2[name];

		if(one<two){
			return -1
		}else if(two < one){
			return 1;
		}else{
			return 0;
		}
	}
}
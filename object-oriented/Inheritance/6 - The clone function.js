/* Clone function. */

// function clone(object) {
//     function F() {}
//     F.prototype = object;
//     return new F;
// }


function clone(obj){
	var o={};
	if(typeof obj =="object"){
		if(obj === null){
			o=null;
		}else{
			if(obj instanceof Array){
				for(var i=0,len=obj.length;i<len;i++){
					o[i]=clone(obj[i]);
				}
			}else{
				for(var key in obj){
					o[key]=clone(obj[key]);
				}
			}
		}
	}else{
		o=obj;
	}

	return o;
}

//test
// var o={
// 	name:"fdd",
// 	age:"23",
// 	getName:function(){
// 		console.log(this.name);
// 	},
// 	getAge:function(){
// 		console.log(this.age);
// 	}
// }

// var b=clone(o);

// o.name="fudongdong";
// o.age="23 years old";
// b.name="weibo";
// b.age="weibo";

// b.getName();
// b.getAge();
// o.getName();
// o.getAge();
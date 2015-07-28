function clone(obj){
	function Fn(){};

	Fn.prototype=obj;
	var o=new Fn();
	for(var a in o){
		if(typeof o[a] == "object"){
			o[a]=clone(o[a]);
		}
	}

	return o;
}

var obj={
	name:"fdd",
	age:"23",
	love:{
		name:"weibo",
		age:"22"
	},
	toString:function(){
		return this.name+" "+this.age+" "+this.love.name+" "+this.love.age;
	}
}


/**

function Fn(){
	this.name="";
	this.age="";
	this.love={
	
	};
	this.toString=function(){};
}

**/

var o=clone(obj);
//相当于
//o.prototype=obj;
//不过7，8，9行中
//name值为字符串“fdd“，age值为23，love值为一个对象的引用，所以用了7-9行把对象的引用修改成了一个对象
o.name="weibo";
o.age="22";
o.love.name="weibo";
o.love.age="18";


console.log(obj);
console.log(o);


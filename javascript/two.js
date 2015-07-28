var book={};

Object.defineProperties(book,{
	_year:{
		value:2004,
		writable:true,
		configurable:true
	},
	edition:{
		value:1,
		writable:true,
		configurable:true
	},
	year:{
		get:function(){
			return this._year;
		},
		set:function(newValue){
			if(newValue>2004){
				this._year=newValue;
				this.edition=newValue-2003;
			}else{
				throw new Error("年份不能小于2004");
			}
		}
	}
})


console.log(book.year);
book.year=2013;

console.log(book.year);
console.log(book.edition);


book.year=1030;
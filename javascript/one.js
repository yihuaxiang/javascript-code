var book={
	_year:2004,
	//下划线表示只能通过对象方法访问
	edition:1
}

Object.defineProperty(book,"year",{
	get:function(){
		return this._year;
	},
	set:function(newValue){
		if(newValue>2004){
			this._year=newValue;
			this.edition=newValue-2003;
		}else{
			throw new Error("年份错误,必须大于2004");
		}
	}
})

book.year=2008;
console.log(book.edition);


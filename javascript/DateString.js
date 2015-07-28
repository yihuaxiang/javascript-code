String.prototype.dateStringToDate=function(text){
	console.log(this);
}
Date.prototype.toMyDateString=function(){
	var year=this.getFullYear();
	var month=this.getMonth();
	var date=this.getDate();

	return year+"-"+month+"-"+date;
}

var s="I am fudongdong";

s.dateStringToDate();

var d=new Date();
console.log(d.toMyDateString());
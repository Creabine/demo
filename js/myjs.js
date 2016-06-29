$(document).ready(function(){
	var myDate = new Date();
	myDate.myyear = myDate.getFullYear();
	myDate.mymonth = myDate.getMonth();
	myDate.myday = myDate.getDate();
	myDate.week = myDate.getDay();
	myDate.myhouur = myDate.getHours()
	myDate.myminute = myDate.getMinutes();
	myDate.mysecond = myDate.getSeconds();

	//var mymonth = ["Jan.","Feb.","Mar.","Apr.","May.","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."];
	var myweek = ["星期一","星期二","星期三","星期四","星期五","星期六","星期日"];





	//更新显示时间
	$("#year").text(myDate.myyear);
	$("#month").text(myDate.mymonth);
	$("#day").text(myDate.myday);
	$("#week").text(myweek[myDate.week]);
	$("#hour").text(myDate.myhouur);
	$("#minute").text(myDate.myminute);
	$("#second").text(myDate.mysecond);





	// second_move(350,350,350,"myself",-90,40,50);
	// second_move(350,350,350,"music",90,40,50);
	// second_move(350,350,350,"game",-30,40,50);
	// second_move(350,350,350,"ACG",30,40,50);
	// second_move(350,350,350,"movie",150,40,50);
	// second_move(350,350,350,"Japanese",210,40,50);


	

}); 

//参数分别为：恒星坐标，环绕半径，卫星id，卫星初始角度，卫星半径，移动间隔。
function second_move(X,Y,R,id,deg,r1,time){ 

	var round = $('#' + id);
	var r = R; // 半径
	var x = X; // 园的中心点 x 坐标   中心点就是.dashboard的中心
	var y = Y; // 园的中心点 y 坐标
	
	var deg = deg; // 起始角度
	
	setInterval(function(){
		
		deg++
		
		//Math.sin( deg*Math.PI/180 ) = a/r;
		//Math.cos( deg*Math.PI/180 ) = b/r;
		
		// 算出圆周上每一个 A 的 x,y 轴
		var a = Math.sin( deg*Math.PI/180 ) * r;
		var b = Math.cos( deg*Math.PI/180 ) * r;
		
		// 算出 圆周上每一个 A 的坐标。这里的40是因为div定位原点是左上角，这里要变成中点。
		//长宽都是80，所以中点就是各自减去40
		round.css('left', x + b -r1 + 'px');
		round.css('top', y + a -r1 + 'px');

		
	},time);
}


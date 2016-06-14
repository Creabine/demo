$(document).ready(function(){
	//用来初始化弹出框，不然无效
	$('[data-toggle="popover"]').popover();



	$("#page1-ziliao").click(function() {
		$('body').animate({scrollTop:0},250);
		$("#page1-ziliao").css("backgroundColor","white");
		$("#page2-jingyan,#page3-jingli,#page4-baozou").css("backgroundColor","#9C58B6");
	});
	$("#page2-jingyan").click(function() {
		$('body').animate({scrollTop:900},250);  
		$("#page2-jingyan").css("backgroundColor","white");
		$("#page1-ziliao,#page3-jingli,#page4-baozou").css("backgroundColor","#9C58B6");
	});

	$("#page3-jingli").click(function() {
		$('body').animate({scrollTop:1800},250);  
		$("#page3-jingli").css("backgroundColor","white");
		$("#page2-jingyan,#page1-ziliao,#page4-baozou").css("backgroundColor","#9C58B6");
	});

	$("#page4-baozou").click(function() {
		$('body').animate({scrollTop:2700},250);  
		$("#page4-baozou").css("backgroundColor","white");
		$("#page2-jingyan,#page3-jingli,#page1-ziliao").css("backgroundColor","#9C58B6");
	});



}); 





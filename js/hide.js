// JavaScript Document
$(document).ready(function(){
	$("#para").click(function(){
		$(this).hide();
	});
	$(".para").click(function(){
		$(this).hide();
	});
	$("#show").click(function(){
		$(".para").show();
		$("#para").show();
	});
});
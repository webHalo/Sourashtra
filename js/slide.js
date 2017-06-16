// JavaScript Document 
$(document).ready(function(){
	$("#up").click(function(){
		$(".image").(5000,function(){
			$(".display-text").text('Slide up transition complete')
		});
	});
	$("#down").click(function(){
		$(".image").slideDown('slow',function(){
			$(".display-text").text('Slide down transition complete')
		});
	});
	});
	
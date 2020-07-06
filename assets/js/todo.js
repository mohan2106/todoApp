/*$("li").click(function(){
	//alert("clicked");
	if($(this).css("color")==="rgb(128, 128, 128)"){
		$(this).css({
			"color":"black",
			"text-decoration":"none"
		});
	}else{
		$(this).css({
			"color":"gray",
			"text-decoration":"line-through"
		});
	}
	
})*/
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$(".fa-plus").click(function(){
	console.log("clicked");
	$("input[type='text']").fadeToggle();
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	//event.stopPropagation() is used to stop the triggering of parent. it is very very important
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		console.log("enter");
		var todoText=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+todoText+"</li>");
		
	}
});


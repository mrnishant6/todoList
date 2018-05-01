$("ul").on("click", "li",  function(){

	//if li is gray
	if ($(this).css("color") === "rgb(128, 128, 128)") {
		//turn it black
		$(this).css("color", "black");
		$(this).css("text-decoration", "none");
	}
	  //else turn it gray
	else{
		$(this).css({
		color:"gray",
		textDecoration:"line-through"
	});
	}

	
});

//to delete a todo
$("ul").on("click", "span", function(){
 $(this).parent().fadeOut(500, function(){
 	$(this).remove();
 });
});

//to enter a new todo

$("input[type='text']").keypress(function(event){
	if (event.which===13) {
		var todoText= $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-minus-circle'></i></span> "  + todoText + "</li>");
	}
})

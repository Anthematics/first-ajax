document.addEventListener("DOMContentLoaded", function() {

		let button = document.querySelector("#step12");

		button.addEventListener("click",function(event){

				$.ajax({
					url:'http://first-ajax-api.herokuapp.com/',
					method: 'GET'

					//data: ,
					//datatype: 'TEXT',

		}).done(function(){
			console.log('I am Andys boyfriend now.');
		});
	});
});

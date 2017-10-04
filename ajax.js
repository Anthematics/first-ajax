document.addEventListener("DOMContentLoaded", function() {

	function buttonListen(url,selector) {

	let buttons = document.querySelector(selector);
	 buttons.addEventListener("click",function(event){
			$.ajax({
				url: url,
				method: 'GET',

				//data: ,
				//datatype: 'TEXT',

			}).done(function(response){
				console.log('done',response);
			}).fail(function () {
				let fail = createElement('p'); //lets us create the message as p tag <p>
					fail.innerHTML = "you fail" //sets the message as you fail
					selector.appendChild(p); // appends the message to the selector which was defined as an arguement in button listen allowing it to work everywhere.
			});
		});
	}

buttonListen("http://first-ajax-api.herokuapp.com",'#step12')
buttonListen("http://first-ajax-api.herokuapp.com/pong",'#step3456')
buttonListen("http://first-ajax-api.herokuapp.com/count",'#step7' )
});


done 38466

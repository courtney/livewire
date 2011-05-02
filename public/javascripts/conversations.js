$(document).ready(function() {
	// getConversations();
	$.getJSON("http://localhost:3000/topics", function(json) {
		var html = "";
		var topics = [];
		console.log(json);
	});
	$("#sidebar").ajaxError(function(e, xhr, settings, exception) {
		$(this).text( 'error in: ' + settings.url + ' \n'+'error:\n' + xhr.responseText );
		});
	
});

function postMessage() {			 
		$.post("/", { "message" : "happy trails"},
						 function(data) {
						   alert(data);
						 }, 
						 "jsonp");				
}
function getConversations() {
		$.getJSON("https://chemphill:win34m3@convore.com/api/groups/9133/topics.json?callback=?", function(json) {
		var html = "";
		var topics = [];
		console.log(json);
		
		$(json.topics).each(function(groups) {
			$('#twitter').append('<ul><li><h2>' + this.name + ' : ' + this.creator.username + '</h2></li></ul>');
			$.getJSON("https://chemphill:win34m3@convore.com/api/topics/"+this.id+"/messages.json?callback=?", function(data) {
				console.log(data);
				$(data.messages).each(function(groups) {
					$('#twitter ul').append('<li><div>' + this.date_created + ' : ' + this.message + '</div></li>');
				});
			});										
		});					
	});				
}
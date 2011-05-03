$(document).ready(function() {
	getConversations();	
	$('#message').submit(postMessage);
});

function postMessage(data) {
		var msg = $(data.target).find('input:first').val();
		$.post("/message", { message: msg } );
		$('#twitter ul').append('<li><div>' + msg + '</div></li>');			
		// getConversations();		
		return false;
}

function getConversations() {
	$('#twitter').append('<ul>');
		// $.getJSON("/topics", function(json) {
		// var html = "";
		// var topics = [];
		// 
		// $(json.topics).each(function(groups) {
		// 	$('#twitter').append('<ul><li><h2>' + this.name + ' : ' + this.creator.username + ' : '+ this.id+'</h2></li></ul>');
			$.getJSON("/topics/21084", function(data) {
				console.log(data);
				$(data.messages).each(function(groups) {
					$('#twitter ul').append('<li><div>' + this.message + '</div></li>');
				});
			});										
		// });					
	// });				
}


// $("#sidebar").ajaxError(function(e, xhr, settings, exception) {
// 	$(this).text( 'error in: ' + settings.url + ' \n'+'error:\n' + xhr.responseText );
// 	});


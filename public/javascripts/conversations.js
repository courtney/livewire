$(document).ready(function() {
	getTopics();	
	getConversations();	
	$('#message').submit(postMessage);
});

function postMessage(data) {
		var msg = $(data.target).find('input:first').val();
		$.post("/message", { message: msg } );
		$('#twitter ul').append('<li><div>' + msg  + '<em>chemphill <span>8 days ago</span></em></div></li>');	
		$('#twitter').scrollTop($('#twitter ul').height());		
		return false;
}

function getConversations() {
	$('#twitter').append('<ul>');		
		$.getJSON("/topics/21084", function(data) {
			$(data.messages).each(function(groups) {
				$('#twitter ul').append('<li><div>' + this.message + '<em>chemphill <span>8 days ago</span></em></div></li>');
			});
		});												
}

function getTopics() {
	$.getJSON("/topics", function(json) {
	var html = "";
	var topics = [];	
		$(json.topics).each(function(groups) {
			$('#nav').append('<li id="'+this.id+'"><h2>' + this.name + '</h2></li>');			
		});					
	});
}

// $("#sidebar").ajaxError(function(e, xhr, settings, exception) {
// 	$(this).text( 'error in: ' + settings.url + ' \n'+'error:\n' + xhr.responseText );
// 	});


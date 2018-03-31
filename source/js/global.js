$(function() {
    
    // Set up CSRF token for AJAX requests
	var csrftoken = $('meta[name=csrf-token]').attr('content')
	$.ajaxSetup({
	    beforeSend: function(xhr, settings) {
	        if (!/^(GET|HEAD|OPTIONS|TRACE)$/i.test(settings.type)) {
	            xhr.setRequestHeader("X-CSRFToken", csrftoken)
	        }
	    }
	});

});
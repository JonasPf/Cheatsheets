function set_default_data_language() {
	body = document.getElementsByTagName("body")[0];

	if (body.hasAttribute("data-language")) {
		var code_tags = document.getElementsByTagName("code");
		for(var i = 0, max = code_tags.length; i < max; i++) 
		{
			if (!code_tags[i].hasAttribute("data-language")) {
		    	code_tags[i].setAttribute('data-language', body.getAttribute('data-language')); 
		    }  
		}
	}
}

set_default_data_language();
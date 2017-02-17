import Vue from 'vue'


//Vue slideshow //


var slideshow = new Vue({
  el: 'slideshow',
  data: {
    message: 'hi'
  }
});

//did duke win? //

var dukeWin = new Vue ({
  el: '#dukeWin',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
});




document.addEventListener('DOMContentLoaded') function) () {
	q = "duke+unc+basketball"; // search query

	request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/search?q=duke+unc+basketball&api_key=dc6zaTOxFJmzC&tag=', true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			data = JSON.parse(request.responseText).data.image_url;
			console.log(data);
			document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
		} else {
			console.log('reached giphy, but API returned an error');
		 }
	};

	request.onerror = function() {
		console.log('connection error');
	};

	request.send();
});


$(document).ready(function() {
    $('#fullpage').fullpage();
});

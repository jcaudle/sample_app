// Thanks to Jani at codeutopia.net. His post on adding a character counter
// and the comments provided this function and the corresponding CSS edits.
// http://codeutopia.net/blog/2009/08/01/weekend-coding-add-a-character-counter-as-the-background-of-a-textarea-with-javascript

// We want this to run as soon as the page has loaded
window.onload = function() {
    // Character limit
    var limit = 140;

    // the div to contain the background and the textarea
    var div = document.createElement('div');
     div.className = 'charcounter';

     // Append the div into the document before the textarea, so that when we
    // remove the textarea, it can be inserted inside the div and it'll look
    // like it never moved.
    var txt = document.getElementById('micropost_content');
     txt.parentNode.insertBefore(div, txt);

     // this will contain the background numbers
    var counter = document.createElement('div');
     div.appendChild(counter);
     counter.innerHTML =limit;

     // Add both keypress and keydown handlers to make sure the event always
     // fires.
     txt.onkeyup = txt.onkeydown = txt.paste = function() {
	 // Calculuate how many chars the user has remaining
	 var len = limit - txt.value.length;
	 if(len < 0) {
	     counter.className = 'negative';
	 } else {
	     counter.className = '';
	 }

	 counter.innerHTML = len;
    };

     txt.parentNode.removeChild(txt);
     div.appendChild(txt);
}

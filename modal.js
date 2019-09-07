var modal = document.getElementById(&quot;myModal&quot;);

var btn = document.getElementById(&quot;myBtn&quot;);

var span = document.getElementsByClassName(&quot;close&quot;)[0];

btn.onclick = function() {
  modal.style.display = &quot;block&quot;;
}

span.onclick = function() {
  modal.style.display = &quot;none&quot;;
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = &quot;none&quot;;
  }
}

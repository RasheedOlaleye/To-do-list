// to do list practice
var myNodelist = document.getElementsByTagName("li");
var i ;
for( i = 0; i < myNodelist.length; i++){
    var span = document.createElement("Span");
    var txt = document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li[i].appendChild(span);
}
// close button
var close = document.getElementsByClassName("close");
var i;
for( i=0; i <= close.length; i++){
    close[i].onclick=function(){
        var div = this.parentElement;
        div.style.display="none";
    }
}

var dar = document.querySelector('ul');
dar.addEventListener('click', function (ev){
    if (ev.target.tagName === 'li')  {
ev.target.classList.toggle('checked');
    }

}, false);

// Append value to the input field when it is been pressed
function make(){
    var li = document.createElement("li");
    var kg = document.getElementById("inputvalue").value;
    var span = document.createTextNode(kg);
    li.appendChild(span);
    if(kg ===''){
        alert("oops, Please Write something");
    } else{
        document.getElementById("Tap").appendChild(li);
    }
    document.getElementById("inputvalue").value="";
    var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  var close = document.getElementsByClassName("close");

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  var dar = document.querySelector('ul');
dar.addEventListener('click', function (ev){
    if (ev.target.tagName === 'li')  {
ev.target.classList.toggle('checked');
    }

}, false);

}

(function(w, d, u) {
  "use strict";

  var arr = [{id: 1, name: 'John'}, {id: 2, name: 'Peter'}, {id: 3, name: 'Kate'}];

  for (var i = 0; i < arr.length; i++) {
      var div = d.createElement('div');
      div.onclick = function(){
          for (var j = 0; j < arr.length; j++) {
              if (arr[j].id == i) {
                  var name = arr[j].name;
              }
          }
          alert('Div number is ' + i + '. Name is: ' + name);
      }
      div.style.width = '30px';
      div.style.height = '30px';
      div.style.border = '1px solid red';
      d.body.appendChild(div);
  }
})(window, document, undefined)

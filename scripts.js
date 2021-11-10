

function outputForm () {
let user, passWord, form;
   user = document.getElementById('p1').value;
   passWord = document.getElementById('p2').value;
   localStorage.setItem('username', user);
   localStorage.setItem('password', passWord);
   form = document.getElementById('form');
   form.onsubmit = function(evt) {
      evt.preventDefault();
   };
   document.getElementById('str').innerHTML = `Вы ввели: username: ${user}, password:${passWord}`;

}

document.getElementById("p3").addEventListener("click",outputForm);






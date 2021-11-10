

function outputForm () {
   let userAdd = localStorage.setItem('username', document.getElementById("p1").value);
   let userShow =  localStorage.getItem('username')
   let passwordAdd = localStorage.setItem('password', document.getElementById("p2").value) ;
   let passwordShow = localStorage.getItem('password')
   let result = document.getElementById('str')
   return  result.innerHTML =`Вы ввели: username: ${userShow}, password:${passwordShow}`;
}

addEventListener('click', function(click) {

   click.preventDefault();
});

let p3 = document.getElementById("p3")
p3.addEventListener("click",outputForm);






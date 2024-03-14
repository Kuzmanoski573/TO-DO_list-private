let inputZaPoraki = document.getElementById("inputField");
let kopceZaDodavanje = document.getElementById("addField");
let kopceZaBrisenje = document.getElementById('remove');
let krairanje = document.getElementById('messagesAndremove');

kopceZaDodavanje.addEventListener('click', ()=>{
  var kontenjer = document.createElement('div');
  kontenjer.classList.add('msgAndrem');
  krairanje.appendChild(kontenjer);
  var poraka = document.createElement('p');
  poraka.classList.add('messages')
  kontenjer.appendChild(poraka);
  poraka.innerText = inputZaPoraki.value;
  var icon = document.createElement('i');
  kontenjer.appendChild(icon);
  inputZaPoraki.value = '';
});
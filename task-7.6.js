const inputTask6 = document.querySelector('#validation-input');

inputTask6.addEventListener('input', foo =>{
  let a = +(foo.target.value.length);
  
  a < 6 ? (inputTask6.removeAttribute('id'),
  inputTask6.classList.add('invalid'))
  :
  inputTask6.classList.replace('invalid', 'valid')  
})
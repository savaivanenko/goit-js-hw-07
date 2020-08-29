const inputTask6 = document.querySelector('#validation-input');
console.log(inputTask6);

inputTask6.addEventListener('change', foo =>{
  const a = foo.target.value.length;
  a > 6 ? inputTask6.classList.add('valid') : inputTask6.classList.add('invalid');
})
const inputRef = document.querySelector('#name-input');
console.log(inputRef.value);
const h1SpanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', foo =>{
  console.log(foo);
  foo.target.value !== ""? h1SpanRef.textContent = foo.target.value :
    h1SpanRef.textContent = 'незнакомец';   
})
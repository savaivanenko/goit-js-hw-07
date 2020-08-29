const inputRef = document.querySelector('#name-input');
console.log(inputRef);
const h1SpanRef = document.querySelector('#name-output');

inputRef.addEventListener('change', foo =>{
  h1SpanRef.textContent = foo.target.value;
})
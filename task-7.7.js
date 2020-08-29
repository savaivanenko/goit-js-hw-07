const inputRangeRef = document.querySelector('#font-size-control')
console.log(inputRangeRef);
const text = document.querySelector('#text');
console.log(text);
inputRangeRef.addEventListener('input', foo =>{
  const a = foo.target.value+'px'
  text.style.fontSize = a;
})

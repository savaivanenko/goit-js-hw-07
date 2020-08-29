const counterDivRef = document.querySelector('#counter');
const buttonDecRef = counterDivRef.querySelector('[data-action="decrement"]');
const buttonIncRef = counterDivRef.querySelector('[data-action="increment"]');
const value = counterDivRef.querySelector('#value');
//

buttonIncRef.addEventListener('click', () =>
{value.textContent = +(value.textContent) +1;
 let counterValue = value.textContent;
 console.log(`counterValue = ${counterValue}`);
});

buttonDecRef.addEventListener('click', () =>
{value.textContent = +(value.textContent) -1;
  let counterValue = value.textContent;
  console.log(`counterValue = ${counterValue}`);
});
;


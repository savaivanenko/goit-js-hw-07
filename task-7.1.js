const ulCategoriesRef = document.querySelector('#categories');
  console.log(` В списке ${ulCategoriesRef.children.length} категории`)

  const allListRef = document.querySelectorAll('.item')
    allListRef.forEach(element => {  
      console.log(`В категории ${(element.querySelector('h2')).textContent}
      колличество элементов: ${element.querySelector('ul').children.length}`)
});


function age () {
  age = prompt('Введите свой возраст');
  if (age >= 18) {
    console.log('welcome');
  } else if (age < 18) {
    document.body.innerHTML = ''
  }
 }

age();
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

// Це робочий варіант **************************************************
function onFormSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.password.value === ''
  ) {
    alert('Всі поля повинні бути заповнені.');
  } else {
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const userData = { email, password };
    console.log(userData);
    formEl.reset();
  }
}

// Тут не зовсім розумію як заставити формувати правильний обєкт данних
// за домпомогою formData.forEach() Можете показати як правильно? :)
// function onFormSubmit(event) {
//   event.preventDefault();
//   if (
//     event.currentTarget.elements.email.value === '' ||
//     event.currentTarget.elements.password.value === ''
//   ) {
//     alert('Всі поля повинні бути заповнені.');
//   }
//   const formData = new FormData(event.currentTarget);
//   console.log(formData);
//   formData.forEach((value, name) => {
//     const userData = { name: value };
//     console.log(userData);
//   });
// }

// Ключ для localStorage та глобальний об'єкт стану
const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

// Завантаження даних із localStorage під час старту
populateForm();

// Відстеження введення через делегування на формі
form.addEventListener('input', onFormInput);

function onFormInput(event) {
  const { name, value } = event.target;

  // Оновлюємо стан об'єкта та очищаємо від пробілів по краях (.trim())
  formData[name] = value.trim();

  // Зберігаємо актуальний об'єкт у локальне сховище
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Заповнення полів із локального сховища при завантаженні сторінки
function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);

      formData.email = parsedData.email || '';
      formData.message = parsedData.message || '';

      form.elements.email.value = formData.email;
      form.elements.message.value = formData.message;
    } catch (error) {
      console.error('Помилка парсингу даних з localStorage:', error);
    }
  }
}

// Обробка відправки форми
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // Перевіряємо, чи всі поля заповнені
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  // Виводимо об'єкт із даними у консоль
  console.log(formData);

  // Очищаємо localStorage, об'єкт formData та поля форми
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
}
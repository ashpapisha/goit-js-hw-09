const formState = {
  email: "",
  message: "",
};

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;

populateForm();

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);
      formState.email = parsedData.email || "";
      formState.message = parsedData.message || "";

      emailInput.value = formState.email;
      messageInput.value = formState.message;
    } catch (error) {
      console.error("Помилка розбору даних із localStorage", error);
    }
  }
}

form.addEventListener("input", (event) => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();

  formState[fieldName] = fieldValue;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formState.email || !formState.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formState);

  localStorage.removeItem(STORAGE_KEY);
  formState.email = "";
  formState.message = "";
  form.reset();
});

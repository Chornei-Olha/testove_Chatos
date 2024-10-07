// Переключаем меню и обновляем текст
const dropdowns = document.querySelectorAll(".dropdown-btn");
const dropdownContents = document.querySelectorAll(".dropdown-content");
const dateInput = document.querySelector(".calendar-input");

// Обработка кликов по кнопкам
dropdowns.forEach((btn) => {
  btn.addEventListener("click", function () {
    closeAllDropdowns(); // Закрываем все меню перед открытием нового

    const type = this.getAttribute("data-type");

    // Если это кнопка с датой, показываем календарь
    if (type === "date") {
      dateInput.style.display =
        dateInput.style.display === "block" ? "none" : "block";
      return;
    }

    // Открываем соответствующее выпадающее меню
    const dropdownContent = this.nextElementSibling;
    if (
      dropdownContent &&
      dropdownContent.classList.contains("dropdown-content")
    ) {
      dropdownContent.style.display = "block";
    }
  });
});

// Обновляем текст кнопки при выборе пункта
dropdownContents.forEach((content) => {
  content.querySelectorAll("p").forEach((item) => {
    item.addEventListener("click", function () {
      const parentDropdown = content.previousElementSibling;
      parentDropdown.innerHTML = `${this.textContent} <span class="arrow">&#9660;</span>`;
      closeAllDropdowns(); // Закрываем меню после выбора
    });
  });
});

// Добавляем обработчик для изменения даты
dateInput.addEventListener("change", function () {
  const dateBtn = document.querySelector('.dropdown-btn[data-type="date"]');
  const selectedDate = this.value; // Получаем выбранную дату

  // Форматируем дату
  const date = new Date(selectedDate);
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}.${date.getFullYear()}`;

  // Обновляем текст кнопки с выбранной датой
  dateBtn.innerHTML = `${formattedDate} <span class="arrow">&#9660;</span>`;

  // Закрываем календарь
  closeAllDropdowns();
});

// Закрытие всех выпадающих меню
function closeAllDropdowns() {
  dropdowns.forEach((btn) => {
    btn.classList.remove("active");
  });
  dropdownContents.forEach((content) => {
    content.style.display = "none";
  });
  dateInput.style.display = "none"; // Закрываем календарь
}

// Закрытие всех выпадающих меню при клике вне
window.onclick = function (event) {
  if (
    !event.target.matches(".dropdown-btn") &&
    !event.target.matches(".arrow")
  ) {
    closeAllDropdowns();
  }
};

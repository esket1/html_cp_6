document.addEventListener("DOMContentLoaded", () => {
    // Обработчик для переключения видимости спойлера
    document.querySelectorAll(".toggle-spoiler").forEach(button => {
        button.addEventListener("click", () => {
            const spoilerContent = button.nextElementSibling;

            if (spoilerContent) {
                const isVisible = spoilerContent.style.display === "block";

                // Переключение видимости
                spoilerContent.style.display = isVisible ? "none" : "block";

                // Обновление текста кнопки
                button.textContent = isVisible ? "Показать детали" : "Скрыть детали";
            }
        });
    });
});
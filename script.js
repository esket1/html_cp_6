document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".toggle-spoiler").forEach(button => {
        button.addEventListener("click", () => {
            const spoilerContent = button.nextElementSibling;

            if (spoilerContent) {
                const isVisible = spoilerContent.style.display === "block";

                spoilerContent.style.display = isVisible ? "none" : "block";

                button.textContent = isVisible ? "Показать детали" : "Скрыть детали";
            }
        });
    });
});
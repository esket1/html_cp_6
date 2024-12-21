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
const button = document.createElement('button');
button.innerText = '↑';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.display = 'none';
button.style.backgroundColor = '#007BFF';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '50%';
button.style.width = '50px';
button.style.height = '50px';
button.style.fontSize = '20px';
button.style.cursor = 'pointer';
button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

document.body.appendChild(button);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
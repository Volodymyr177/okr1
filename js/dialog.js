function userDialog() {
    let name = prompt("Як вас звати?", "Гість");
    let age = prompt("Скільки вам років?");
    if (age >= 18) {
        alert(`Вітаю, ${name}! Вам ${age} років — ви повнолітній.`);
    } else {
        alert(`Привіт, ${name}! Вам лише ${age} — ще не повнолітній.`);
    }
    if (confirm("Хочете побачити щось цікаве?")) {
        alert("🗓 Подивіться ваш розклад!");
    } else {
        alert("До зустрічі!");
    }
}
userDialog();

function showDeveloperInfo(surname, name, position = "PHP Developer") {
    alert(`Розробник: ${surname} ${name}\\nПосада: ${position}`);
}
showDeveloperInfo("Кузьменко", "Володимир");

const compareStrings = (a, b) => {
    if (a.length > b.length) alert(`Довший рядок: ${a}`);
    else if (a.length < b.length) alert(`Довший рядок: ${b}`);
    else alert("Рядки однакової довжини.");
};
compareStrings(prompt("1 рядок:"), prompt("2 рядок:"));



// // Створення, вставка, заміна, видалення
// const newDiv = document.createElement("div");
// newDiv.textContent = "📌 Додано через JS";
// document.body.appendChild(newDiv);
//
// const parent = document.getElementById("parent");
// if (parent) {
//     const newP = document.createElement("p");
//     newP.textContent = "✅ Нова задача";
//     parent.prepend(newP);
//     parent.after(newP.cloneNode(true));
//     parent.replaceWith(newP.cloneNode(true));
// }
//
// const toRemove = document.getElementById("removeMe");
// if (toRemove) toRemove.remove();

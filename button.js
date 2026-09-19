/* ==========================================================
   TUGMALARGA "BOSILDI" EFFEKTINI QO'SHISH
   - Har bir .btn bosilganda ripple (to'lqin) chiqadi
   - Konsolda qaysi tugma bosilgani ko'rinadi (test uchun)
   ========================================================== */

// Sahifadagi barcha tugmalarni topamiz
const allButtons = document.querySelectorAll(".btn");

// Har biriga alohida "click" tinglovchisini qo'shamiz
allButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {

    // 1) Havola bo'lsa, sahifa tepasiga sakramasligi uchun to'xtatamiz
    event.preventDefault();

    // 2) Ripple (to'lqin) doirasini yaratamiz
    const circle = document.createElement("span");
    circle.classList.add("ripple");

    // Doira o'lchamini tugma o'lchamiga qarab belgilaymiz
    const size = Math.max(button.offsetWidth, button.offsetHeight);
    circle.style.width = circle.style.height = size + "px";

    // Bosilgan joyni aniqlaymiz (sichqoncha koordinatasi)
    const rect = button.getBoundingClientRect();
    circle.style.left = event.clientX - rect.left - size / 2 + "px";
    circle.style.top = event.clientY - rect.top - size / 2 + "px";

    // Doirani tugma ichiga qo'shamiz
    button.appendChild(circle);

    // Animatsiya tugagach doirani o'chirib tashlaymiz
    setTimeout(function () {
      circle.remove();
    }, 500);

    // 3) Test uchun: qaysi tugma bosilganini konsolga chiqaramiz
    console.log("Bosildi:", button.textContent.trim());
  });
});
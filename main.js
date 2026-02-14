const container = document.querySelector(".container");
const openBtn = document.querySelector(".openBtn");
const card = document.querySelector(".cardValentine");
const letterBox = document.querySelector(".letterContent");

// ===== NỘI DUNG THƯ =====
const letterText = `
💖 Gửi người đặc biệt 💖

Anh không giỏi nói những lời hoa mỹ,
nhưng anh thật lòng khi viết những dòng này.

Cảm ơn vì đã đến,
vì đã ở lại,
và vì đã làm thế giới của anh dịu dàng hơn.

💌 Valentine này,
chúc em luôn cười thật nhiều.
`;

// ===== HIỆN CARD =====
openBtn.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    container.classList.add("active", "open");
    card.classList.add("active");
});

// ===== MỞ / ĐÓNG THIỆP =====
card.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const isOpen = card.classList.toggle("open");

    if (isOpen) {
        showLetter();
    } else {
        letterBox.innerHTML = "";
    }
});

// ===== HIỆU ỨNG GÕ CHỮ =====
function showLetter() {
    letterBox.innerHTML = "";
    let i = 0;

    const typing = setInterval(() => {
        letterBox.innerHTML += letterText[i];
        i++;

        if (i >= letterText.length) {
            clearInterval(typing);
        }
    }, 35);
}

var bgMusic = document.getElementById("bgMusic")

// Thay đổi nội dung búc thư ở đây
var letterContent = "Chúc mừng ngày Valentine! Hy vọng em sẽ có một ngày thật vui vẻ và tràn đầy yêu thương. Cảm ơn em đã cùng anh đồng hành trong khoảng thời gian vừa qua, anh biết anh hong phải là người hoàn hảo nhưng mà anh sẽ yêu em bằng tất cả những gì anh có và bằng một cách chân thành nhất. Anh hy vọng rằng tụi mình sẽ ở bên nhau nhiều cái valentile nữa. Yêu em rất nhiều!"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
var bgMusic = document.getElementById("bgMusic")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")

    bgMusic.currentTime = 0
    bgMusic.volume = 0.7

    bgMusic.play().catch(err => {
        console.log("Không phát được nhạc:", err)
    })
})

var cardValentine = document.querySelector(".cardValentine")

function toggleCard() {
    cardValentine.classList.toggle("open")

    if (cardValentine.classList.contains("open")) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 500)
    }
}

/* hỗ trợ cả PC + mobile */
cardValentine.addEventListener("pointerdown", toggleCard)

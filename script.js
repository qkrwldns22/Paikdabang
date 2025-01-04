document.querySelectorAll('.navbar li').forEach(item => {
    item.addEventListener('mouseenter', function() {
        document.querySelector('.sub-bg').classList.add('show'); // sub-bg 표시
    });
    item.addEventListener('mouseleave', function() {
        document.querySelector('.sub-bg').classList.remove('show'); // sub-bg 숨김
    });
});

//메인 베너 슬라이드
let index = 0;

const slides = document.querySelector('.mbslides');
const totalSlides = document.querySelectorAll('.mbslides img').length;
const dots = document.querySelectorAll('.dot');

// 점 클릭 시 슬라이드 전환
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        updateSlider();
    });
});

function updateSlider() {
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;

    // 점의 활성화 상태 업데이트
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// 자동 슬라이드 기능
setInterval(() => {
    index = (index + 1) % totalSlides;
    updateSlider();
}, 10000); // 3초마다 슬라이드 변경

// 초기 상태 업데이트
updateSlider();

//footer family_site
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const fmenu = document.getElementById("fmenu");

    toggleButton.addEventListener("click", function () {
        // fmenu가 보이는지 확인 후 max-height 설정
        if (fmenu.style.maxHeight) {
            fmenu.style.maxHeight = null; // 슬라이드 업
            fmenu.classList.remove('active'); // active 클래스 제거
        } else {
            fmenu.style.maxHeight = fmenu.scrollHeight + "px"; // 슬라이드 다운
            fmenu.classList.add('active'); // active 클래스 추가
        }
    });
});

//to_top버튼
document.addEventListener("DOMContentLoaded", function () {
    const toTopBtn = document.querySelector(".to_top");

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", function () {
        // 스크롤이 100px 이상 내려갔을 때 버튼 표시
        if (window.scrollY > 100) {
            toTopBtn.classList.add("show"); // 클래스 추가로 보이도록 설정
        } else {
            toTopBtn.classList.remove("show"); // 클래스 제거로 숨김
        }
    });

    // 버튼 클릭 시 상단으로 부드럽게 이동
    toTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
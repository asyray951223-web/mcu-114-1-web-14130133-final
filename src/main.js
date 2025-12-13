/* ----- 導航欄功能 (手機版選單切換) ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  // 如果目前的 class 是 "nav-menu"，則加上 " responsive" 變成手機版樣式
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    // 否則恢復原狀 (關閉選單)
    menuBtn.className = "nav-menu";
  }
}

/* ----- 監聽滾動事件：當網頁捲動時增加導航欄陰影 ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  // 當滾動超過 50px 時
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // 增加陰影、縮小高度 (變成 70px)
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    // 滾回頂部時，移除陰影、恢復高度 (90px)
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

// (以下註解掉的程式碼是打字特效與滾動動畫，目前未啟用)
// var typingEffect = ...
// const sr = ScrollReveal(...

/* ----- 變更當前活動連結 (Scroll Spy) ----- */
// 選取所有具有 id 屬性的 section 標籤
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY; // 取得目前捲動的垂直位置

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight, // 區塊高度
      sectionTop = current.offsetTop - 50, // 區塊距離頂部的距離 (減50是為了微調觸發點)
      sectionId = current.getAttribute("id"); // 取得區塊 ID (如 home, about)

    // 如果目前的捲動位置在這個區塊範圍內
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // 找到對應的導航連結，加上 "active-link" 樣式 (變色)
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      // 否則移除 "active-link" 樣式
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}

// 監聽滾動事件，持續執行 scrollActive 函式
window.addEventListener("scroll", scrollActive);

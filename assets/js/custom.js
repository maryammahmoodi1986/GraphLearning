document.addEventListener("DOMContentLoaded", function() {
  const toc = document.querySelector('#TOC');
  // اگر TOC وجود داره ولی خالیه
  if (toc && toc.innerHTML.trim() === '') {
    toc.innerHTML = '<p style="padding:10px; color:#aaa; text-align:center;">گراف‌های یادگیری ماشین</p>';
  }
});


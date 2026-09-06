let title = document.querySelector("#hello"); // ID로 찾기
title = document.querySelector(".hello h1"); // class로 찾기
// querySelector는 CSS Selector처럼 사용
// querySelector는 맨처음 요소만 받음 - 전부 필요하면 querySelectorAll로 array 받아서 사용

title.innerText = "Hello";
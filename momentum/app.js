let title = document.querySelector(".hello h1"); // class로 찾기

function handleTitleClick()
{
    title.style.color = "blue";
}
function handleMouseEnter()
{
    title.innerText = "Mouse is here!";
}
function handleMouseLeave()
{
    title.innerText = "Mouse is gone!"
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
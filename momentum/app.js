let h1 = document.querySelector(".hello h1"); // class로 찾기

function handleh1Click()
{
    const clickedClass = "clicked";
    h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleh1Click);
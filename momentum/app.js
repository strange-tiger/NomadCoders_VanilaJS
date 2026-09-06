let h1 = document.querySelector(".hello h1"); // class로 찾기

function handleh1Click()
{
    h1.style.color = "blue";
}
function handleMouseEnter()
{
    h1.innerText = "Mouse is here!";
}
function handleMouseLeave()
{
    h1.innerText = "Mouse is gone!"
}
function handleWindowResize()
{
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy()
{
    alert("copier!");
}
function handleWindowOffline()
{
    alert("SOS no WIFI!");
}
function handleWindowOnline()
{
    alert("All Goood");
}

h1.onclick = handleh1Click;
h1.onmouseenter= handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);
h1.removeEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
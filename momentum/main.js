
// <⚠️ DONT DELETE THIS ⚠️>
// import './styles.css';
const colors = ['#1abc9c', '#3498db', '#9b59b6', '#f39c12', '#e74c3c'];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const text = document.querySelector("h2");

const superEventHandler = {
  handleMouseEnter: function()
  {
    text.innerText = "The mouse is here!";
    text.style.color = colors[0];
  },

  handleMouseLeave: function()
  {
    text.innerText = "The mouse is gone!";
    text.style.color = colors[1];
  },

  handleWindowResize: function()
  {
    text.innerText = "You just resized!";
    text.style.color = colors[2];
  },

  handleMouseRightClick: function()
  {
    event.preventDefault();
    text.innerText = "That was a right click!";
    text.style.color = colors[3];
  },
};

text.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
text.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleMouseRightClick);

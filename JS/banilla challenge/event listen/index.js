// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const handleTitle = document.querySelector("h2");

const superEventHandler = {
  handleMouseEnter: () => {
    handleTitle.innerText = "The mouse is here!";
    handleTitle.style.color = "#1abc9c";
    //console.log("en");
  },

  handleMouseLeave: () => {
    handleTitle.innerText = "The mouse is gone!";
    handleTitle.style.color = "#3498db";
    //console.log("le");
  },

  handleResized: () => {
    handleTitle.innerText = "You just resized!";
    handleTitle.style.color = "#9b59b6";
    //console.log("re");
  },

  handleContextmenu: () => {
    handleTitle.innerText = "That was a right click!";
    handleTitle.style.color = "#e74c3c";
    //console.log("con");
  }
};

handleTitle.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
handleTitle.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleResized);
window.addEventListener("contextmenu", superEventHandler.handleContextmenu);

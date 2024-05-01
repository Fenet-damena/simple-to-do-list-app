function Addtask() {
    const inputBox = document.getElementById("inputbox");
    const listC = document.getElementById("listc");
  
    if (inputBox.value === '') {
      alert("Please write something");
    } else {
      let li = document.createElement("li");
      li.textContent = inputBox.value;
      listC.appendChild(li);
      let span = document.createElement("span");
      span.textContent = "\u00d7";
      li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
  }
  
  function savedata() {
    const listC = document.getElementById("listc");
    localStorage.setItem("data", listC.innerHTML);
  }
  
  function showtask() {
    const listC = document.getElementById("listc");
    listC.innerHTML = localStorage.getItem("data");
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    showtask();
  
    const listC = document.getElementById("listc");
  
    listC.addEventListener("click", function(e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("ck");
        savedata();
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
      }
    }, false);
  });
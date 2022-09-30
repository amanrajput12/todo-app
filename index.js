const item = document.querySelector(".input");

const todo = document.querySelector(".container");

const btn = document.querySelector(".addButton");

btn.addEventListener("click", function () {
  var paragraph = document.createElement("h2");
  paragraph.innerText = item.value;
  todo.append(paragraph);
  item.value = "";

  let delBtn = document.createElement("button");
  delBtn.style.backgroundColor = "green";
  delBtn.innerHTML = "Remove ";
  delBtn.style.border = "none";
  delBtn.style.borderRadius = "4px";
  delBtn.style.padding = "5px";
  delBtn.style.cursor = "pointer";

  todo.appendChild(delBtn);
  delBtn.style.display = "flex";
  delBtn.style.justifyItems = "center";
  delBtn.style.alignContent = "center";

  delBtn.addEventListener("click", remove);
  function remove() {
    paragraph.innerHTML = "";
    delBtn.style.display = "none";
  }
});

// 1) Change text
document.getElementById("changeTitleBtn").onclick = function () {
  document.getElementById("mainHeading").innerHTML = "Text Changed using JavaScript!";
  document.getElementById("status1").innerHTML = "Title has been changed.";
};

// 2) Style paragraphs
document.getElementById("styleParasBtn").onclick = function () {
  let paras = document.getElementsByTagName("p");
  for (let p of paras) {
    p.style.fontStyle = "italic";
    p.style.color = "blue";
  }
};

// 3) Change CSS Color and Position
let moveElement = document.getElementById("movingText");
document.getElementById("changeColorBtn").onclick = () => moveElement.style.color = "red";
document.getElementById("nudgeRightBtn").onclick = () => moveElement.style.left = "40px";
document.getElementById("resetPosBtn").onclick = () => moveElement.style.left = "0px";

// 4) Swap Image
let imgA = "https://picsum.photos/id/1025/300/180";
let imgB = "https://picsum.photos/id/1015/300/180";
document.getElementById("swapImgBtn").onclick = function () {
  let img = document.getElementById("demoImg");
  img.src = img.src.includes("1025") ? imgB : imgA;
};

// 5) Add + Remove List Items
document.getElementById("addTextNodeBtn").onclick = function () {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode("New Item"));
  document.getElementById("todoList").appendChild(li);
};
document.getElementById("deleteNodeBtn").onclick = function () {
  let list = document.getElementById("todoList");
  if (list.lastElementChild) list.removeChild(list.lastElementChild);
};

// 6) jQuery - Change Button Text
$("#jqChangeTextBtn").click(function () {
  $(this).text("Changed using jQuery!");
});

// 7) jQuery - Background Image
$("#setBgBtn").click(() => $("#bgTarget").css("background-image", "url('https://picsum.photos/seed/pic/300/180')"));
$("#clearBgBtn").click(() => $("#bgTarget").css("background-image", "none"));

// 8) jQuery - Access Form Data
$("#demoForm").submit(function (e) {
  e.preventDefault();
  let data = $(this).serializeArray();
  $("#formOutput").html(JSON.stringify(data));
});
$("#resetFormBtn").click(() => $("#demoForm")[0].reset());

// 9) jQuery - Add Attribute
$("#addAttrBtn").click(() => $("#attrTarget").attr("title", "Added using jQuery"));
$("#showAttrBtn").click(() => $("#attrOutput").text($("#attrTarget")[0].outerHTML));

// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello";

// alert("Welcom to my book corner!"); // 弹框提示

// document.querySelector("html").addEventListener("click", function () {
//   alert("click!");
// });

// let myImg = document.querySelector("img");
// myImg.onclick = function () {
//   let mySrc = myImg.getAttribute("src");
//   if (mySrc === "images/logo.png") {
//     myImg.setAttribute("src", "images/不同类型的选择器.png");
//   } else {
//     myImg.setAttribute("src", "images/logo.png");
//   }
// };

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入你的名字");
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem("userName", myName);
    myHeading.textContent = "你好呀，" + myName + "。欢迎来到我的图书角";
  }
}

if (!localStorage.getItem("userName")) {
  setUserName();
} else {
  let storedUserName = localStorage.getItem("userName");
  myHeading.textContent = "你好呀，" + storedUserName + "。欢迎来到我的图书角";
}

myButton.onclick = function () {
  setUserName();
};

// // 设置个性化欢迎信息
// // 获取新按钮和标题的引用
// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

// // 个性化欢迎信息设置函数
// function setUserName() {
//   let myName = prompt("请输入你的名字。");
//   if (!myName || myName === null) {
//     setUserName();
//   } else {
//     localStorage.setItem("name", myName);
//     myHeading.innerHTML = "Mozilla 酷毙了，" + myName;
//   }
// }

// // 初始化代码：在页面初次读取时进行构造工作：
// if (!localStorage.getItem("name")) {
//   setUserName();
// } else {
//   let storedName = localStorage.getItem("name");
//   myHeading.textContent = "Mozilla 酷毙了，" + storedName;
// }

// // 为按钮设置 onclick 事件处理器：
// myButton.onclick = function () {
//   setUserName();
// };

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/thinking-man-statue.jpg") {
    myImage.setAttribute("src", "images/thinking-man-statue-2.jpg");
  } else {
    myImage.setAttribute("src", "images/thinking-man-statue.jpg");
  }
};

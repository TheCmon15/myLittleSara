
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "YAY!! I love u too sara (: ";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHA4dHlicm1hZmEybHZnMml3bXJidWN1NTduOGd2NXIyOWlkc3VrZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M6T9NNrW22OEX8Ve3h/giphy.gif";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
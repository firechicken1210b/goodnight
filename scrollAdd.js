console.log("scroll");

const element = document.querySelector("#container");

element.addEventListener('wheel', (event) => {
  event.preventDefault();
  console.log("scroll");
  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
    
  });
});
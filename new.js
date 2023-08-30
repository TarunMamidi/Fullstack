function reloadPage() {
    location.reload();
  }

  function myFunction() {
    let element = document.body;
    element.classList.toggle("dark");
}
  

document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.querySelector(".image-container");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
  
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

    let currentIndex = 0;

  
    function showImage(index) {
      imageContainer.innerHTML = `<img src="${images[index]}" alt="Image ${index + 1}">`;

    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);

    }
  
    showImage(currentIndex);

  
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);

    });
  
    nextButton.addEventListener("click", () => {
      nextImage();
    });
  

    const intervalId = setInterval(nextImage, 3000);
  

    prevButton.addEventListener("click", () => {
      clearInterval(intervalId);
    });
  
    nextButton.addEventListener("click", () => {
      clearInterval(intervalId);
    });
  });
  
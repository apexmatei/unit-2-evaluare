let images = ['image1.png', 'image2.png', 'image3.png']; // Add your image paths here
let index = 0;

function startSlideshow() {
  document.getElementById('slideshow').style.display = 'none';
  document.getElementById('imageContainer').style.display = 'block';
  document.getElementById('slideshowImage').src = images[index];
  setInterval(changeImage, 2000); // Change image every 2 seconds (2000ms)
}

function changeImage() {
  index = (index + 1) % images.length;
  document.getElementById('slideshowImage').src = images[index];
}

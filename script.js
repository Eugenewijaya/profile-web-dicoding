// Array berisi URL gambar dari Google Cloud Storage
const images = [
  "https://storage.googleapis.com/profil-app-bucket/1.png",
  "https://storage.googleapis.com/profil-app-bucket/2.png",
  "https://storage.googleapis.com/profil-app-bucket/3.png",
  "https://storage.googleapis.com/profil-app-bucket/4.png",
  "https://storage.googleapis.com/profil-app-bucket/5.png",
];

let currentIndex = 0;

// Fungsi untuk mengubah gambar profil secara otomatis
function changeImage() {
  const imgElement = document.getElementById("profile-pic");
  imgElement.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

// Mengubah gambar setiap 3 detik
setInterval(changeImage, 3000);

// Script JavaScript untuk watermarking
const imageInput = document.getElementById("imageInput");
const watermarkedCanvas = document.getElementById("watermarkedCanvas");
const addWatermarkButton = document.getElementById("addWatermark");

imageInput.addEventListener("change", function () {
  const file = imageInput.files[0];
  const img = new Image();
  const canvas = watermarkedCanvas;
  const ctx = canvas.getContext("2d");

  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
  };

  img.src = URL.createObjectURL(file);
});

addWatermarkButton.addEventListener("click", function () {
  const canvas = watermarkedCanvas;
  const ctx = canvas.getContext("2d");

  ctx.font = "30px Arial";
  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  ctx.fillText("Watermark", 20, 40);

  // Menghasilkan URL data gambar hasil
  watermarkedDataUrl = canvas.toDataURL('image/jpeg');
  downloadButton.disabled = false;
});

downloadButton.addEventListener("click", function () {
  if (watermarkedDataUrl) {
    const a = document.createElement("a");
    a.href = watermarkedDataUrl;
    a.download = "watermarked_image.jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
});

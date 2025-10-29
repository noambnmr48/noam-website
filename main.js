function generateWallpaper(color) {
  const totalWallpapers = 12;
  const randomIndex = Math.floor(Math.random() * totalWallpapers) + 1;
  const imagePath = `public/wallpapers/${color}/${randomIndex}.jpg`;

  const wallpaperDisplay = document.getElementById('wallpaperDisplay');
  wallpaperDisplay.innerHTML = `
    <img src="${imagePath}" alt="${color} wallpaper">
    <div class="wallpaper-actions">
      <button onclick="generateWallpaper('${color}')">Regenerate</button>
      <button onclick="downloadWallpaper('${imagePath}')">Download</button>
    </div>
  `;
}

function downloadWallpaper(imagePath) {
  const link = document.createElement('a');
  link.href = imagePath;
  link.download = 'wallpaper.jpg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

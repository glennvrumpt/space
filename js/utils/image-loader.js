export const loadImage = (filename) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${filename}`));
    img.src = `images/${filename}`;
  });
};

export async function loadImages(filenames) {
  const imagePromises = filenames.map(loadImage);
  try {
    const images = await Promise.all(imagePromises);
    return images;
  } catch (error) {
    console.error(error);
    return [];
  }
}

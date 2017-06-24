export const IMAGE_SELECTED = 'IMAGE_SELECTED';
export const IMAGE_LOADED = 'IMAGE_LOADED';

export function selectImage(image) {
  return {
    type: IMAGE_SELECTED,
    image
  }
}
export function loadImages(images) {
  return {
    type: IMAGE_LOADED,
    images
  }
}

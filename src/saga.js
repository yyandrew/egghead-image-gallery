import { fetchImages } from './flickr';

export function* sayHello() {
  console.log('hello');
};

export function* loadImages() {
  const images = yield fetchImages();
  console.log(images);
};

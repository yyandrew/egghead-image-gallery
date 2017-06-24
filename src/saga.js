import { fetchImages } from './flickr';
import { put } from 'redux-saga/effects';
import { loadImages } from './actions';

export function* sayHello() {
  console.log('hello');
};

export function* loadImagesSaga() {
  const images = yield fetchImages();
  yield put(loadImages(images))
};

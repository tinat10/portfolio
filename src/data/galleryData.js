import { carouselImages } from './carouselImages';

function toDisplayName(src, index) {
  const file = src.split('/').pop() || `photo-${index + 1}`;
  const noExt = file.replace(/\.[^.]+$/, '');
  const cleaned = noExt.replace(/[_-]+/g, ' ').trim();
  return cleaned ? cleaned : `photo ${index + 1}`;
}

export const galleryPhotos = carouselImages.map((src, index) => ({
  id: `gallery-${index + 1}`,
  src,
  alt: `Gallery photo ${index + 1}`,
  title: toDisplayName(src, index),
  featured: index < 6,
  tags: index % 2 === 0 ? ['life', 'travel'] : ['memories', 'moments'],
}));


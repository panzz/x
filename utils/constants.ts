import type { Size } from 'hooks/useSessionContextState';
import type { Position } from 'react-rnd';

export const MILLISECONDS_IN_SECOND = 1000;

export const IMAGE_FILE_EXTENSIONS = [
  '.apng',
  '.avif',
  '.bmp',
  '.cur',
  '.gif',
  '.ico',
  '.jfif',
  '.jif',
  '.jpe',
  '.jpeg',
  '.jpg',
  '.pjp',
  '.pjpeg',
  '.png',
  '.svg',
  '.tif',
  '.tiff',
  '.webp',
  '.xbm'
];

export const DEFAULT_WINDOW_POSITION: Position = {
  x: 0,
  y: 0
};

export const DEFAULT_WINDOW_SIZE: Size = {
  height: '200px',
  width: '250px'
};

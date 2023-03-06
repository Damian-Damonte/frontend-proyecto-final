import React from 'react'
import { GalleryDesktopContainer } from './styledGalleryDesktop'

export default function ProductGalleryDesktop({ images }) {

  const imgGrid = images.length > 5 ? images.slice(0, 5) : images;
  console.log(images.length);
  console.log(imgGrid);
  const galleryItems = images.map(img => ({original:img, thumbnail:img}));

  return (
    <GalleryDesktopContainer $countImg={imgGrid.length}>
      {imgGrid.map(img => (<img src={img.url} key={img.id} />))}
      <p>Ver más</p>
    </GalleryDesktopContainer>
  )
}

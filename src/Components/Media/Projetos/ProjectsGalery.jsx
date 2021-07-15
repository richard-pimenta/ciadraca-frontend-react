import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
import { renegadosPhotos } from "./photos"


// import { Container } from './styles';

export function ProjectsGalery() {
  return (
    <div>
      <ImageGallery items={renegadosPhotos} />
    </div>
  )

}


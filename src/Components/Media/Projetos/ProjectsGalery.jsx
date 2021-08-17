import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
import { useRouteMatch } from 'react-router-dom';
import { NewPhotos } from "./NewPhotos"
import { storage } from "../../../Initialize/Firebase"


// import { Container } from './styles';

export function ProjectsGalery() {
  const [images, setImages] = useState([])

  const albumMatch = useRouteMatch("/projetos/fotos/:album")
  const { album } = albumMatch.params

  useEffect(() => {
    storage.collection('ciadraca').doc(album).onSnapshot((doc) => {
      const photos = doc.data().img || []
      setImages(photos)
    })
  }, [])

  return (

    <div>
      <header>

      </header>
      <section>
        <ImageGallery items={images}></ImageGallery>

      </section>
      <div>
        <NewPhotos curentAlbum={album}></NewPhotos>
      </div>
    </div>
  )

}


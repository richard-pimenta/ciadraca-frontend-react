import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './carousel.css'

export function CarouseImg() {
  return (
    <div className="container col-md-6" >
      <Carousel variant="dark" autoPlay={true} pause="hover" className="carousel">
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="https://clicknagalera.com.br/wp-content/uploads/2021/05/MAIO-1080x675.jpg"
            alt="QUando as Máquinas Param"
          />

          <h5>Quando as Máquinas Param</h5>
          <p>Uma obra de Plinio Marques, dirigida por Rodrigo de Castro</p>

        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="https://firebasestorage.googleapis.com/v0/b/ciadraca.appspot.com/o/ciadraca%2Fos-renegados%2Fos-renegados-apresentacao-atores.jpeg?alt=media&token=4678e260-d64a-4646-85d8-007c10dcf600"
            alt="Ciadraca"
          />

          <h5 className="white">Ciadraca Escola de artes</h5>
          <p className="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        </Carousel.Item>

      </Carousel>
    </div>
  )

}


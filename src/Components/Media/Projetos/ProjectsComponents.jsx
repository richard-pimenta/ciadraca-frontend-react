import React, { useEffect, useState } from 'react';
import { Card, Button, Form, Col, Row, InputGroup, FormControl } from "react-bootstrap"
import { storage } from "../../../Initialize/Firebase"




export function ProjectsComponents() {
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    storage.collection('ciadraca').onSnapshot((snapshot) => {
      const albunsTemp = []
      snapshot.forEach(doc => {
        albunsTemp.push({ ...doc.data(), id: doc.id })
      })
      setAlbums(albunsTemp)
    })
  }, [])


  return (
    <div>
      <Form>
        <Row className="mb-2">
          {albums.map((album, index) => (
            <Form.Group as={Col}>
              < Card style={{ width: '18rem' }} key={album.name} body>
                <Card.Img variant="top" src={album.img && album.img[0].thumbnail} />
                <Card.Body>
                  <Card.Title>{album.name}</Card.Title>
                  <Card.Text>
                    {album.desc}
                  </Card.Text>
                  <Button variant="outline-warning" href={`/projetos/fotos/${album.id}`}>Conhecer Projetos</Button>
                </Card.Body>
              </Card>
            </Form.Group>

          ))
          }
        </Row>
        <br />
      </Form>
      <br />
      <div>
        <Button variant="outline-warning" href="/projetos/fotos/criarAlbum">Adicionar Album</Button>
      </div>
    </div>
  )
}

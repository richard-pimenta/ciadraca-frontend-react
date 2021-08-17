import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { storage } from "../../../Initialize/Firebase"
// import { Container } from './styles';


export function CreateProjectsAlbums() {

  const [albumName, setAlbumName] = useState('')
  const [albumDescr, setAlbumDescr] = useState('')
  function createAlbum() {
    if (!albumName) {
      return
    }
    storage.collection('ciadraca').doc(albumName).set({
      name: albumName,
      desc: albumDescr
    })
    setAlbumName('');
    <Link to="/projetos" />
  }

  function albumNameChanged(e) {
    setAlbumName(e.target.value)
  }
  function albumDescChanged(e) {
    setAlbumDescr(e.target.value)
  }

  return (
    <div>
      {/* <div>
        <label >Nome do Álbum</label>
        <input value={albumName || "Digite o nome do álbum"} onChange={albumNameChanged} />
      </div>
      <div>
        <label >Descrição do Álbum</label>
        <input value={albumDescr || "Digite a descrição do álbum"} type="text" onChange={albumDescChanged} />
      </div> */}

      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nome Álbum</Form.Label>
          <Form.Control type="text" placeholder="Digite o nome do álbum" value={albumName} onChange={albumNameChanged} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descreição Álbum</Form.Label>
          <Form.Control as="textarea" placeholder="Digite a descreição do álbum" rows={3} value={albumDescr} onChange={albumDescChanged} />
        </Form.Group>
      </Form>
      <Button onClick={createAlbum} >Criar album</Button>
    </div>
  );
}

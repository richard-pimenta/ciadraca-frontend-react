import React from 'react';
import { Card, Button } from "react-bootstrap"
import { Link, Router, Switch, Route } from "react-router-dom";
import { ProjectsGalery } from "./ProjectsGalery"

export function ProjectsComponents() {
  function showFotos() {

    return (<Link to={"/projetos/os-renegados/"} component={ProjectsGalery} ></Link>)
  }
  return (
    <Route>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/ciadraca.appspot.com/o/ciadraca%2Fos-renegados%2Fos-renegados-logo.jpeg?alt=media&token=559d1566-d7e4-40af-80f4-f18fa120d12a" />
          <Card.Body>
            <Card.Title> Cia Os Renegados</Card.Title>
            <Card.Text>
              Compania teatral os Renegados
            </Card.Text>
            <Button variant="primary" href="/projetos/fotos/os-renegados/">Conhecer Projetos</Button>
          </Card.Body>
        </Card>

      </div>
    </Route>
  );
}
// as={Link} to={"/projetos/os-renegados/"}
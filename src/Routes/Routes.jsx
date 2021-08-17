import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import { HomeComponets } from "../Components/Home/HomeComponents";
import { ProjectsComponents } from "../Components/Media/Projetos/ProjectsComponents";
import { SociaisComponents } from "../Components/Media/Sociais/SociaisComponents";
import { AboutComponents } from "../Components/About/AboutComponents";
import { ContactsComponents } from "../Components/Contacts/ContactsComponents";
import { ProjectsGalery } from "../Components/Media/Projetos/ProjectsGalery"
import { CreateProjectsAlbums } from "../Components/Media/Projetos/CreateProjectsAlbums"

export function Routes() {
  return (
    <Switch>
      <Route path="/contacts">
        <ContactsComponents />
      </Route>
      <Route path="/about">
        <AboutComponents />
      </Route>
      <Route exact path="/projetos">
        <ProjectsComponents />
      </Route>
      <Route path="/media/socias">
        <SociaisComponents />
      </Route>
      <Route exact path="/">
        <HomeComponets />
      </Route>
      <Route path="/projetos/fotos/criarAlbum">
        <CreateProjectsAlbums />
      </Route>
      <Route path="/projetos/fotos/:album">
        <ProjectsGalery />
      </Route>

    </Switch>
  )
}

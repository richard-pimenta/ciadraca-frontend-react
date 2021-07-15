import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import { HomeComponets } from "../Components/Home/HomeComponents";
import { ProjectsComponents } from "../Components/Media/Projetos/ProjectsComponents";
import { SociaisComponents } from "../Components/Media/Sociais/SociaisComponents";
import { AboutComponents } from "../Components/About/AboutComponents";
import { ContactsComponents } from "../Components/Contacts/ContactsComponents";
import { ProjectsGalery } from "../Components/Media/Projetos/ProjectsGalery"
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
      <Route path="/projetos/fotos/os-renegados">
        <ProjectsGalery />
      </Route>
      <Route path="/">
        <HomeComponets />
      </Route>

    </Switch>
  );
}

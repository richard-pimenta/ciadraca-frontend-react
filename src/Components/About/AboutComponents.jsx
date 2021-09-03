import React from "react";
import { ReactComponent as Done } from "../../svgs/done_black_48dp.svg";
import { ReactComponent as Festival } from "../../svgs/festival_black_48dp.svg";
import { ReactComponent as Values } from "../../svgs/star_rate_black_48dp.svg";
import { ReactComponent as Vision } from "../../svgs/visibility_black_48dp.svg";
// import { Container } from './styles';

export function AboutComponents() {
  return (
    <div class="container col-md-6 configdiv">
      <div class="container col-md-6 configdiv">
        <h2>
          {" "}
          <Festival />
          Quem Somos?
        </h2>
      </div>
      <p>
        A CIADRACA Produções Artísticas é uma produtora sediada na cidade do Rio
        de Janeiro, destacando-se na produção de serviços à artes cênicas e shows
        . Fundada em Abril de 2008, vem conquistando novos espaços no meio
        artístico. A produtora nasceu com a proposta de inovar dentro do cenário
        cultural. O fundador Rodrigo de Castro, através da produtora desenvolve
        projetos sociais, com apresentações e oficinas na zona oeste do Rio. A
        CIADRACA Produções vem buscando um crescimento profissional e dando
        oportunidade a novos atores do cenário artístico.
      </p>
      <br />

      <h3>

        <Done /> MISSÃO
      </h3>
      <p>
        Produzir, executar e divulgar espetáculos teatrais e Shows, apresentando
        em teatros, escolas, Shopping e empresas, com muita arte, educação,
        entretenimento e diversão. clique aqui
      </p>
      <br />
      <h3>
        
        <Vision /> VISÃO
      </h3>
      <p>
        Produzir espetáculos de alta qualidade. Desenvolvendo projetos também de
        cunho sócio-educativos e culturais voltado para criança, adolescente e
        adulto.clique aqui
      </p>
      <br />
      <h3>
        <Values /> VALORES
      </h3>
      <p>
        A CIADRACA Produções trabalha com comprometimento, ética, credibilidade,
        profissionalismo, responsabilidade social e inovação.clique aqui
      </p>
    </div>
  )

}

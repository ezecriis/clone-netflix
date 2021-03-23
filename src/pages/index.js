import * as React from "react"
import { Helmet } from "react-helmet"
import StateManager from "../components/StateManager";

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Liteflix</title>
      <meta name="Description" content="Catálogo de películas dinámico." />
    </Helmet>
    <StateManager />
  </>
)

export default IndexPage

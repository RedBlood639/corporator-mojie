import React from "react"
import { Seo } from "components/Seo"
import metadata from "utils/metadata"

const Home: React.FC = () => {
  return (   
    <Seo       
      title={metadata.home.title}
      description={metadata.home.description}
    />
  )
}

export default Home

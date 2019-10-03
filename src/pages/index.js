import React from "react"

import ProfileImage from '../components/profileImage'
import SEO from "../components/seo"
import "../styles/index.scss"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div class="wrapper">
      <aside>
        <p>Jakob Suckow</p>
      <ProfileImage />
      </aside>
      <main>
        <p>this is where the big list will go</p>
      </main>
    </div>
  </>
)

export default IndexPage

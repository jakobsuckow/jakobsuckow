import React from "react"

import ProfileImage from '../components/profileImage'
import SEO from "../components/seo"
import "../styles/index.scss"

import List from '../components/list'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div class="wrapper">
      <aside>
        <ProfileImage />
        <ul className="bio">
          <li>located: Berlin</li>
          <li>linkedIn: Jakob Suckow</li>          
        </ul>
     
      </aside>
      <main>
        <List />
      </main>
    </div>
  </>
)

export default IndexPage

import React from "react"

import ProfileImage from "../components/profileImage"
import SEO from "../components/seo"
import "../styles/index.scss"

import List from "../components/list"
import Footer from "../components/footer"

// import { useMousePosition } from "../components/useMousePosition"
const IndexPage = () => {
  // const position = useMousePosition()

  return (
    <>
      <SEO title="Home" />
      <div class="wrapper">
        <aside>
          <ProfileImage />
          <ul className="bio">
            <li>located: Berlin</li>
            <li>linkedIn: Jakob Suckow</li>
            <li>email: jakob.suckow94@gmail.com</li>
            {/* <div>
              {position.x} : {position.y}
            </div> */}
          </ul>
        </aside>
        <main>
          <List />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default IndexPage
